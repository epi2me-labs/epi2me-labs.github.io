---
title: "EPI2MELabs downloads and resources"
date: "2020-10-22T00:00:00.000Z"
description: "Resources for running EPI2MELabs tutorials"
---

# EPI2MELabs downloads and resources

Below are listed all resources on which EPI2MELabs is built. We aim for all
components of EPI2MELabs to be open source (including this website) and
available through our GitHub repository:
https://github.com/epi2me-labs/tutorials.

If you find something is not available please contact support@nanoporetech.com


### EPI2MELabs Launcher

The LabsLauncher is used to start, stop, and update the EPI2MELabs notebook
server. We provide executables for Windows 10, macOS, and Linux.

| Platform     | Download                                                                                                                                                              |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Windows 10   | [ont-epi2melabs-installer-v1.0.8-win10.exe](https://github.com/epi2me-labs/labslauncher/releases/download/v1.0.8/ont-epi2melabs-installer-v1.0.8-win10.exe)           |
| macOS        | [ont-epi2melabs-launcher-v1.0.8-macos.dmg](https://github.com/epi2me-labs/labslauncher/releases/download/v1.0.8/ont-epi2melabs-launcher-v1.0.8-macos.dmg)             |
| Ubuntu 16.04 | [ont-epi2melabs-launcher-1.0.8-0.xenial.deb](https://github.com/epi2me-labs/labslauncher/releases/download/v1.0.8/ont-epi2melabs-launcher-1.0.8-0.xenial.deb)         |
| Ubuntu 18.04 | [ont-epi2melabs-launcher-1.0.8-0.bionic.deb](https://github.com/epi2me-labs/labslauncher/releases/download/v1.0.8/ont-epi2melabs-launcher-1.0.8-0.bionic.deb)         |
| Ubuntu 20.04 | [ont-epi2melabs-launcher-1.0.8-0.focal.deb](https://github.com/epi2me-labs/labslauncher/releases/download/v1.0.8/ont-epi2melabs-launcher-1.0.8-0.focal.deb)           |
| CentOS 7     | [ont-epi2melabs-launcher-1.0.8-1.el7.x86_64.rpm](https://github.com/epi2me-labs/labslauncher/releases/download/v1.0.8/ont-epi2melabs-launcher-1.0.8-1.el7.x86_64.rpm) |
| CentOS 8     | [ont-epi2melabs-launcher-1.0.8-1.el8.x86_64.rpm](https://github.com/epi2me-labs/labslauncher/releases/download/v1.0.8/ont-epi2melabs-launcher-1.0.8-1.el8.x86_64.rpm) |

The launcher is written in Python with [Qt](https://www.qt.io/) and the
sourcecode is available from GitHub:
https://github.com/epi2me-labs/labslauncher.


### Notebook files

*A listing of all available notebooks is available on the [Notebook
Index](/nbindex) page.*

The notebooks used within EPI2MELabs are available in their source form from
the GitHub repository: https://github.com/epi2me-labs/tutorials. These are
updated regularly with enhancements and fixes.

### Docker containers

The docker container for the EPI2MELabs notebook server is hosted on dockerhub:
https://hub.docker.com/r/ontresearch/nanolabs-notebook, with the source code
for the build process on Github: https://github.com/epi2me-labs/nanolabs.

The notebook server is based on the
[docker-stacks](https://github.com/jupyter)

## Nextflow workflows

*A listing of all available notebooks is available on the [Workflows
Index](/wfindex) page.*

All EPI2ME Labs workflows are available open-source through our
[Github space](https://github.com/epi2me-labs/); workflow projects
are named with a `wf-artic` prefix.

The workflows can be run easily using nextflow without explicitely
downloading anything from Github, for example:

```
nextflow run epi2me-labs/wf-artic --help
```

Will download our SARS-CoV-2 ARTIC sequencing workflow and display
its help text. See the [Workflow Quick Start](/wfquickstart) for
further information.

## Aplanat

[Aplanat](https://github.com/epi2me-labs/aplanat) is a plotting library built
on top of [bokeh](https://docs.bokeh.org/en/latest/). It allows graphs to be
contructed and displayed in notebooks with minimal boiler plate. Aplanat
also provides functionality to generate static HTML report documents, as used
in the EPI2ME Labs Nextflow workflows.

## Mapula
[Mapula](https://github.com/epi2me-labs/mapula) is an alignment statistics
package designed to work on streaming data; it can be inlined in a typical
[samtools](http://www.htslib.org/) pipeline to calculate statistic on-the-fly.

