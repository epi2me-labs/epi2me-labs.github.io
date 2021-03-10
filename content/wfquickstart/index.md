---
title: Workflow Quick Start Guide
date: "2022-03-07T00:00:00.000Z"
description: "Getting started with EPI2ME Labs Workflows"
---

# EPI2ME Labs Workflows Quick Start Guide

EPI2ME Labs workflow are built using the [nextflow](https://www.nextflow.io/) workflow
framework:

>*Nextflow enables scalable and reproducible scientific workflows using
>software containers. It allows the adaptation of pipelines written in the most
>common scripting languages.*
>
>*Its fluent DSL simplifies the implementation and the deployment of complex
>parallel and reactive workflows on clouds and clusters.*


## Installation

EPI2ME Labs workflows can currently be run using either
[Docker](https://www.docker.com/products/docker-desktop) or
[conda](https://docs.conda.io/en/latest/miniconda.html) to provide isolation of
the required software. Both methods are automated out-of-the-box provided
either docker of conda is installed.

In the future we hope to provide support for the [Singularity](https://sylabs.io/docs/)
container platform.

### Nextflow and Docker installation on GridION and PromethION devices

Installation of the software on Oxford Nanopore Technologies' sequencing device
can be performed using the command:

    sudo apt install ont-nextflow

This will install a [Java runtime](https://openjdk.java.net/), Nextflow, and
Docker. If docker has not already been configured the command below can be
used to provide user access to the docker services. Please logout of your
computer after this command has been typed.

    sudo usermod -aG docker $USER

### Installation on Ubuntu devices

For hardware running Ubuntu the following instructions should suffice to install
Nextflow and Docker in order to run the workflow.

1. Install a Jva runtime environment (JRE):

   ```sudo apt install default-jre```

2. Download and install Nextflow may be downloaded from https://www.nextflow.io:

   ```curl -s https://get.nextflow.io | bash```

   This will place a `nextflow` binary in the current working directory, you 
   may wish to move this to a location where it is always accessible, e.g:

   ```sudo mv nextflow /usr/local/bin```

3. Install docker and add the current user to the docker group to enable access:

   ```
   sudo apt install docker.io
   sudo usermod -aG docker $USER
   ```

## Generic Workflow instructions

The code behind all EPI2ME Labs workflows is hosted publically on our Github
space: https://github.com/epi2me-labs/. Workflow projects are prefixed with `wf-`.
For example the code powering our [ARTIC](https://github.com/artic-network/fieldbioinformatics)-based
SARS-CoV-2 analysis is available at: https://github.com/epi2me-labs/wf-artic.

For the most part, users will not need to interact directly with the Github
code repositories as Nextflow has the ability to automatically manage 
workflows available on Github. 

***The instructions below are provided using [wf-artic](https://github.com/epi2me-labs/wf-artic) as an examplar workflow,
for other workflow simple replace `wf-artic` with `wf-name-of-workflow`.***

### Downloading and Running Workflows

With the prerequisites installed, users can run:

    nextflow run epi2me-labs/wf-artic --help

to see the options for a specific workflow. The help message will display all
common options available for augmenting the workflows behaviour. See 
*Configuration and tuning* below for information regarding manipulating
how workflows are run.

To run the workflow using Docker containers supply the `-profile standard`
argument to `nextflow run`:

*The command below uses test data available from the [github repository](https://github.com/epi2me-labs/wf-artic/tree/master/test_data)
It can be obtained with `git clone https://github.com/epi2me-labs/wf-artic`.*

```
# run the pipeline with the test data
OUTPUT=my_artic_output
nextflow run epi2me-labs/wf-artic \
    -w ${OUTPUT}/workspace
    -profile standard
    --fastq test_data/sars-samples-demultiplexed/
    --samples test_data/sample_sheet \
    --out_dir ${OUTPUT}
```

### Running the workflow with Conda

To run the workflow using conda rather than docker, simply replace 

    -profile standard 

with

    -profile conda

in the command above.

### Configuration and tuning

> This section provides some minimal guidance for changing common options, see
> the [Nextflow documentation](https://www.nextflow.io/docs/latest/config.html) for further details.

The default settings for the workflow are described in the configuration file `nextflow.config`
found within the git repository. The default configuration defines an *executor* that will 
use a specified maximum CPU cores (four at the time of writing) and RAM (eight gigabytes).

If the workflow is being run on a device other than a GridION, the available memory and
number of CPUs may be adjusted to the available number of CPU cores. This can be done by
creating a file `my_config.cfg` in the working directory with the following contents:

```
executor {
    $local {
        cpus = 4
        memory = "8 GB"
    }
}
```

and running the workflow providing the `-c` (config) option, e.g.:

```
# run the pipeline with custom configuration
nextflow run epi2me-labs/wf-artic \
    -c my_config.cfg \
    ...
```

The contents of the `my_config.cfg` file will override the contents of the default
configuration file. See the [Nextflow documentation](https://www.nextflow.io/docs/latest/config.html)
for more information concerning customized configuration.

**Using a fixed conda environment**

By default, Nextflow will attempt to create a fresh conda environment for any new
analysis (for reasons of reproducibility). This may be undesirable if many analyses
are being run. To avoid the situation a fixed conda environment can be used for all
analyses by creating a custom config with the following stanza:

```
profiles {
    // profile using conda environments rather than docker
    // containers
    fixed_conda {
        docker {
            enabled = false
        }
        process {
            withLabel:artic {
                conda = "/path/to/my/conda/environment"
            }
            shell = ['/bin/bash', '-euo', 'pipefail']
        }
    }
}
```

and running nextflow by setting the profile to `fixed_conda`:

```
nextflow run epi2me-labs/wf-artic \
    -c my_config.cfg \
    -profile fixed_conda \
    ...
```


### Updating workflows

Periodically when running workflows, users may find that a message is displayed
indicating that an update to the workflow is available.

To update the workflow simply run (for e.g. the `wf-artic` workflow):

    nextflow pull epi2me-labs/wf-artic


## Building the docker container from source

The docker images used for running the EPI2ME Labs workflows are available on
[dockerhub](https://hub.docker.com/repository/docker/ontresearch/).
The image is built from the Dockerfile present in the git repository. Users
wishing to modify and build the image can do so with:

```
CONTAINER_TAG=ontresearch/wf-artic:latest

git clone https://github.com/epi2me-labs/wf-artic
cd wf-artic

docker build \
    -t ${CONTAINER_TAG} -f Dockerfile \
    --build-arg BASEIMAGE=ontresearch/base-workflow-image:v0.1.0 \
    .
```

In order to run the workflow with this new image it is required to give
`nextflow` the `--wfversion` parameter:

```
nextflow run epi2me-labs/wf-artic \
    --wfversion latest
```


## Useful links

* [nextflow](https://www.nextflow.io/) The workflow management system used by EPI2ME Labs workflows.
* [docker](https://www.docker.com/products/docker-desktop) A software container platform that can be optionally used by EPI2ME Labs.
* [conda](https://docs.conda.io/en/latest/miniconda.html) A software package manager that can be optionally used by workflows.

