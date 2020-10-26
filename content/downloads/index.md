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


## EPI2MELabs Launcher

The LabsLauncher is used to start, stop, and update the EPI2MELabs notebook
server. We provide executables for Windows 10, macOS, and Linux.

| Platform     | Download                                                                                                                                                          |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Windows 10   | [ont-epi2melabs-installer-v0.6.5-win10.exe](https://github.com/epi2me-labs/labslauncher/releases/download/v0.6.5/ont-epi2melabs-installer-v0.6.5-win10.exe)       |
| macOS        | [ont-epi2melabs-launcher-v0.6.5-macos.app.zip](https://github.com/epi2me-labs/labslauncher/releases/download/v0.6.5/ont-epi2melabs-launcher-v0.6.5-macos.app.zip) |
| Ubuntu 16.04 | [ont-epi2melabs-launcher-0.6.5-0.xenial.deb](https://github.com/epi2me-labs/labslauncher/releases/download/v0.6.5/ont-epi2melabs-launcher-0.6.4-0.xenial.deb)     |
| Ubuntu 18.04 | [ont-epi2melabs-launcher-0.6.5-0.bionic.deb](https://github.com/epi2me-labs/labslauncher/releases/download/v0.6.5/ont-epi2melabs-launcher-0.6.5-0.bionic.deb)     |

The launcher is written in Python with [Qt](https://www.qt.io/) and the
sourcecode is available from GitHub:
https://github.com/epi2me-labs/labslauncher.


## Notebook files

*A listing of all available notebooks is available on the [Notebook
Index](/nbindex) page.*

The notebooks used within EPI2MELabs are available in their source form from
the GitHub repository: https://github.com/epi2me-labs/tutorials. These are
updated regularly with enhancements and fixes.

## Docker containers

The docker container for the EPI2MELabs notebook server is hosted on dockerhub:
https://hub.docker.com/r/ontresearch/nanolabs-notebook, with the source code
for the build process on Github: https://github.com/epi2me-labs/nanolabs.

The notebook server is based on the
[docker-stacks](https://github.com/jupyter)

## Aplanat

[Aplanat](https://github.com/epi2me-labs/aplanat) is a plotting library built
on top of [bokeh](https://docs.bokeh.org/en/latest/). It allows graphs to be
contructed and displayed in notebooks with minimal boiler plate.
