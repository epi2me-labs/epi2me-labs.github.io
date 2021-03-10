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

### Variant Calling

* [wf-hap-snps](https://www.github.com/epi2me-labs/wf-hap-snps): a workflow for
  running small variant calling and annotation in haploid samples.
  ([Sample report](/workflows/wf-hap-snps.html))

### Miscellaneous

* [wf-artic](https://www.github.com/epi2me-labs/wf-artic): a nextflow workflow for
  running the ARTIC SARS-CoV-2 workflow on multiplexed MinION, GridION, and
  PromethION runs. ([Sample report](/workflows/wf-artic.html))
