/* Real-time cumulative workflow demonstration
 *
 * This workflows demonstrates the combination of Channel.watchPath()
 * and Process.scan() to create a workflow working in real-time as
 * new inputs are available and produce an updating summary stream.
 *
 * Usage:
 *     nextflow run main.nf
 *
 * When nextflow is running, create files matching input/*.txt, for
 * example run:
 *
 *     for i in {1..3}; do
 *         python3 -c 'print("ACGT" * '$i')' > inputs/input_${i}.txt;
 *     done;
 *
 * Copyright 2022 Oxford Nanopore Technologies Plc
 * License: MIT
 */
nextflow.enable.dsl=2
nextflow.preview.recursion=true
import nextflow.util.BlankSeparatedList

/* Classify the input data stream. For this example we simply output
 * a JSON file with some summary information about the input file.
 * These summaries will later be combined in the `accumulate` process
 */
process classify {
    input:
        path "input.txt"
    output:
        path "summary.json"
    script:
    """
    #!/usr/bin/env python3
    # just count the characters in the file in this example
    import json

    data = dict()
    data['data'] = [
        len(open("input.txt", "r").read())]
    json.dump(data, open("summary.json", "w"))
    """
}


/*  This process works with .scan to accumulate results
 *  output by the `classify` process. Items in the output channel
 *  are the cumulative results, and are fed back into the process
 *  to combine with new data.
 */
process accumulate {
    input: 
        path data
    output:
        path "output_${task.index}.json"
    publishDir "output", mode: 'copy', pattern: "output_${task.index}.json"
    script:
        // scan, for reasons unknown, passes us the entire history
        // of outputs through `path data` (along with the new input)
        // We only need the new input with the last output
        output = "output_${task.index}.json"
        if (data instanceof BlankSeparatedList) {
            new_input = data.getAt(0)
            state = data.getAt(-1)
        } else {
            // first iteration we have only the input,
            // which we'll call the initial state
            new_input = "null"
            state = data
        }
    """
    #!/usr/bin/env python3
    # This Python script reads data in JSON files and combines them
    # into a single new state. In general the script is responsible
    # for the update: state <- f(new_input, state), with `f` some
    # operation combining its arguments in a useful way.
    import json
    task_index = ${task.index}
    new_input = "${new_input}"
    state = "${state}"
    output = "${output}"

    print(f"Reading state from '{state}' for task {task_index}")
    state_data = json.load(open(state))

    if new_input != "null":
        print(f"Adding new data from: {new_input}")
        new_data = json.load(open(new_input))
        state_data["data"].extend(new_data["data"])

    print(f"Writing new state to {output}")
    json.dump(state_data, open(output, "w"))
    """
}

workflow {
    // create an input stream watching a directory for .txt files
    data = channel.watchPath("inputs/*.txt")
    // classify the input data
    classifications = classify(data)
    // create the cumulative result stream
    cumulative = accumulate.scan(classifications)

    // note that cumulative is a queue channel, not a single accumulation
    // each emitted value builds upon the previous.
    cumulative.view(it -> it.text)
}
