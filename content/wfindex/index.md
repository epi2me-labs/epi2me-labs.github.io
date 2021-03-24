---
title: EPI2ME Labs Nextflow Workflows
date: "2021-03-09T00:00:00.000Z"
description: "Getting started with EPI2ME Labs workflows."
---

# EPI2ME Labs Workflows

EPI2ME Labs maintains a collection of [Nextflow](https://www.nextflow.io/) bioinformatics
workflows tailored to Oxford Nanopore Technologies long-read sequencing data. They
are curated and actively maintained by experts in long-read sequence analysis.

## Getting Started - Installation

We are excited to offer our bioinformatics solutions using the Nextflow
reactive workflow framework. Nextflow has been selected as a preferred
framework because of its integration with container technologies, software
package managers and its scalability to cluster- and cloud-scale installations.
Nextflow also has growing user adoption through projects such as
[nf-core](https://nf-co.re/). These advantages will help us deliver varied
workflows with minimal requirements for the installation of additional
software.

See the [Workflows Quickstart](/wfquickstart) page for a walkthrough to guide
installation of the pre-requisites for using our workflows in your computing
environment.

## Available workflows

Below you will find a complete list of available workflows with a short
description of each. Each description is accompanied by a link to the
Github repository hosting the workflow and a sample workflow report.

For more information on running workflows see our [Workflow Quick Start Guide](/wfquickstart).

### Basic Tasks

* [wf-alignment](https://github.com/epi2me-labs/wf-alignment) packages the [minimap2](https://github.com/lh3/minimap2) software and streamlines the
  process of mapping sequence reads to a reference genome and preparing summary
  statistics. It can also analyse the abundance of known molarity control
  experiments and use this information to derive the abundances of other species
  present in the sample. ([Sample report](/workflows/wf-alignment-report.html))

### Variant Calling

* [wf-hap-snps](https://www.github.com/epi2me-labs/wf-hap-snps): a workflow for
  running small variant calling and annotation in haploid samples. ([Sample report](/workflows/wf-hap-snps-report.html))

### Assembly

* [wf-plasmid](https://www.github.com/epi2me-labs/wf-hap-snps): assembly
  of small plasmid sequences, for verifying the results of molecular
  cloning experiments. ([Sample report](/workflows/wf-plasmid-report.html))

### Metagenomics

* [wf-metagenomics](https://github.com/epi2me-labs/wf-metagenomics) includes the [Centrifuge](https://ccb.jhu.edu/software/centrifuge/) software and appropriate
  indexes to facilitate the taxonomic classification of sequence reads from
  metagenome samples. ([Sample report](/workflows/wf-metagenomics-report.html))

### Miscellaneous

* [wf-artic](https://www.github.com/epi2me-labs/wf-artic): a nextflow workflow for
  running the ARTIC SARS-CoV-2 workflow on multiplexed MinION, GridION, and
  PromethION runs. ([Sample report](/workflows/wf-artic-report.html))
