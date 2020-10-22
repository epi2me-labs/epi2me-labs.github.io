---
title: Index of Notebooks and Tutorials
date: "2020-10-22T00:00:00.000Z"
description: "Listing and description of available notebooks."
---

Below you will find a complete list of available notebooks with a short
description of each. Listed also are notebooks in development.

***The links will be populated in due course.***

### Basic Tasks

* [Introduction to FASTQ](/Introduction_to_fastq_file.ipynb) - An introduction
  to the FASTQ format and simple file operations

* [Introduction to VCF](/Introduction_to_Variant_Call_Format_(vcf)_files.ipynb)
  - An introduction to Variant Call Format files and their manipulation in
    Python and on the command line.

* [Introduction to BAM](/Introduction_to_SAM_and_BAM_files.ipynb) - An
  introduction to the SAM and BAM formats for storing alignment data and their
manipulation with `samtools`.

* [Introduction to FAST5](/Introduction_to_Fast5_files.ipynb) - A guide to
  handling raw sequencing data from Oxford Nanopore Technologies' sequencing
devices.

* [Basic QC](/Basic_QC_Tutorial.ipynb) - A simple workflow using the sequencing
  summary file, produced by MinKNOW and Guppy, to QC measures such as read
length and quality.

* ***Alignment QC*** (Planned) - Walking through alignment of reads to a
  reference sequence, and and introduction to the world of `samtools` and
`pysam`.

* [Read Until Inputs](/Curating_Read_Until_input_files_for_MinKNOW.ipynb) - A
  short snippet to aid the creation of the necessary files required by MinKNOW
for exome Read Until experiment

### Assembly

* [Assembly tutorial](/Assembly_Tutorial.ipynb) - A workflow utilising Flye and
  Medaka to produce high quality assemblies of small to mid-sized genomes.

* ***Assembly assessment*** (Planned) - An introduction and tips on assessing
  the quality of an assembly using both reference-based and reference-free
methods.



### Metagenomics
* [Metagnomic classification](/Metagenomic_classification_tutorial.ipynb) - An
  introduction to Centrifuge and Pavian for the classification of single
molecule long-reads, and discovery of What's in my pot?
* [Post-EPI2ME 16S Analysis](/Analysis_of_EPI2ME_16S_CSV_Output.ipynb) - A
  quick demonstration of adding lineage information to EPI2ME 16S output, and
grouping counts by rank.
* ***Metagenomic assembly*** (Planned) - A guided approach to metagenomic
  assembly and assessment based on Flye's metagenomic assembly.




### cDNA and RNA

* [QC of cDNA reads](/Introduction_to_Pychopper.ipynb) - A workflow using
  pyChopper providing preliminary analysis and data filtering of ONT cDNA read
datasets.

* [Isoform detection](/Isoform_Tutorial.ipynb) - A tutorial guide for
  identifying full length transcripts in your cDNA experiments and comparing
them against a known annotation.

* ***De-novo isoform detection*** (Planned) - Similar to the Isoform Detection
  notebook above but using a de-novo, assembly-based method for contructing
transcript consensus sequences.

* [Differential Gene Expression](/Differential_gene_expression.ipynb) -
  Pipeline for differential gene expression (DGE) and differential transcript
usage (DTU) analysis using Nanopore long reads.




### Variant calling

* [Structural variant calling](/Structural_Variation_Tutorial.ipynb) - A
  notebook which walks through the steps of identifying and classifying
structural variants from long-read datasets.

* [Human small variant calling](/Human_Variant_Calling_with_Medaka.ipynb) - A
  workflow for calling small variants (both SNPs and Indels) from amplicon data
using Medaka.

* [Bacterial small variant calling](/Viral_and_Bacterial_Variant_Calling.ipynb)
  - A guide to using Medaka to call small variants in haploid samples




### Other

* [Clone validation](/Clone_validation_tutorial.ipynb) - Validation of
  synthetic biological constructs using Nanopore sequencing rather than Sanger
sequencing.

* [Cas9 Targeted Sequencing](/Cas9_Targeted_Sequencing_Tutorial.ipynb) - A
  workflow to complement Cas9 targeted sequencing experiments using ONT
devices.

* [SARS-CoV-2 Analysis](/SARS_CoV_2_Analysis_Workflow.ipynb) - A notebook based
  around the ARTIC pipeline for the analysis of SARS-Cov-2 multiplexed amplicon
datasets.

* [Modified bases](/Modified_Base_Tutorial.ipynb) - A demonstration of the use
  of Medaka to process and summarise the optional modified base output of
Guppy.

* [Medaka tech. demo](/Introduction_to_how_ONT's_medaka_works.ipynb) - A deep
  dive into the inner workings of Oxford Nanopore Technologies' Medaka software
