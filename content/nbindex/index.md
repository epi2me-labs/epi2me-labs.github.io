---
title: Index of Notebooks and Tutorials
date: "2020-10-22T00:00:00.000Z"
description: "Listing and description of available notebooks."
---

Below you will find a complete list of available notebooks with a short
description of each. Listed also are notebooks in development. The links direct
to pre-rendered versions of the notebooks to provide some illustrations of the
capabilities of each notebook; these pages are not interactive.


### Basic Tasks

* [Introduction to FASTQ](/notebooks/Introduction_to_fastq_file.html) - An introduction
  to the FASTQ format and simple file operations

* [Introduction to VCF](/notebooks/Introduction_to_Variant_Call_Format_(vcf)_files.html)
  - An introduction to Variant Call Format files and their manipulation in
    Python and on the command line.

* [Introduction to BAM](/notebooks/Introduction_to_SAM_and_BAM_files.html) - An
  introduction to the SAM and BAM formats for storing alignment data and their
manipulation with `samtools`.

* [Introduction to FAST5](/notebooks/Introduction_to_Fast5_files.html) - A guide to
  handling raw sequencing data from Oxford Nanopore Technologies' sequencing
devices.

* [Basic QC](/notebooks/Basic_QC_Tutorial.html) - A simple workflow using the sequencing
  summary file, produced by MinKNOW and Guppy, to QC measures such as read
length and quality.

* ***Alignment QC*** (Planned) - Walking through alignment of reads to a
  reference sequence, and and introduction to the world of `samtools` and
`pysam`.

* [Adaptive Sampling Inputs](/notebooks/Curating_Adaptive_Sampling_input_files_for_MinKNOW.html) - A
  short snippet to aid the creation of the necessary files required by MinKNOW
for exome Adaptive Sampling experiment.

### Assembly

* [Assembly tutorial](/notebooks/Assembly_Tutorial.html) - A workflow utilising Flye and
  Medaka to produce high quality assemblies of small to mid-sized genomes.

* ***Assembly assessment*** (Planned) - An introduction and tips on assessing
  the quality of an assembly using both reference-based and reference-free
methods.



### Metagenomics
* [Metagnomic classification](/notebooks/Metagenomic_classification_tutorial.html) - An
  introduction to Centrifuge and Pavian for the classification of single
molecule long-reads, and discovery of What's in my pot?
* [Post-EPI2ME 16S Analysis](/notebooks/Analysis_of_EPI2ME_16S_CSV_Output.html) - A
  quick demonstration of adding lineage information to EPI2ME 16S output, and
grouping counts by rank.
* ***Metagenomic assembly*** (Planned) - A guided approach to metagenomic
  assembly and assessment based on Flye's metagenomic assembly.




### cDNA and RNA

* [QC of cDNA reads](/notebooks/Introduction_to_Pychopper.html) - A workflow using
  pyChopper providing preliminary analysis and data filtering of ONT cDNA read
datasets.

* [Isoform detection](/notebooks/Isoform_Tutorial.html) - A tutorial guide for
  identifying full length transcripts in your cDNA experiments and comparing
them against a known annotation.

* ***De-novo isoform detection*** (Planned) - Similar to the Isoform Detection
  notebook above but using a de-novo, assembly-based method for contructing
transcript consensus sequences.

* [Differential Gene Expression](/notebooks/Differential_gene_expression.html) -
  Pipeline for differential gene expression (DGE) and differential transcript
usage (DTU) analysis using Nanopore long reads.




### Variant calling

* [Structural variant calling](/notebooks/Structural_Variation_Tutorial.html) - A
  notebook which walks through the steps of identifying and classifying
structural variants from long-read datasets.

* [Human small variant calling](/notebooks/Human_Variant_Calling_with_Medaka.html) - A
  workflow for calling small variants (both SNPs and Indels) from amplicon data
using Medaka.

* [Bacterial small variant calling](/notebooks/Viral_and_Bacterial_Variant_Calling.html)
  - A guide to using Medaka to call small variants in haploid samples




### Other

* [Clone validation](/notebooks/Clone_validation_tutorial.html) - Validation of
  synthetic biological constructs using Nanopore sequencing rather than Sanger
sequencing.

* [Cas9 Targeted Sequencing](/notebooks/Cas9_Targeted_Sequencing_Tutorial.html) - A
  workflow to complement Cas9 targeted sequencing experiments using ONT
devices.

* [SARS-CoV-2 Analysis](/notebooks/SARS_CoV_2_Analysis_Workflow.html) - A notebook based
  around the ARTIC pipeline for the analysis of SARS-Cov-2 multiplexed amplicon
datasets.

* [Modified bases](/notebooks/Modified_Base_Tutorial.html) - A demonstration of the use
  of Medaka to process and summarise the optional modified base output of
Guppy.

* [Medaka tech. demo](/notebooks/Introduction_to_how_ONT's_medaka_works.html) - A deep
  dive into the inner workings of Oxford Nanopore Technologies' Medaka software
