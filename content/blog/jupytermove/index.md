---
title: EPI2MELabs moves to JupyterLab
date: "2020-10-23T23:23:00.000Z"
description: "Why were are moving EPI2MELabs to the JupyterLab frontend."
tags:
---

When we released EPI2MELabs earlier this year we wanted to create an
environment where "non-coders", people with little to no experience of writing
computer code could learn to analyse their nanopore sequencing data. To this
end we needed a slick, minimal, welcoming presentation of the data analysis. We
wanted to enable learn the ropes of sequence analysis without being scared by
it.

We elected to couple our analysis software with Python notebooks as a first
step.  However we felt that the standard JupyterLab interface for Python
notebooks was a little too "made by software developers, for software
developers", so started to look for alternatives. The Google Colab interface
fit the bill: it has a clean design with no complex menus, allows code to be
hidden and contains many nice visual hints as to what is happening when code is
run. We therefore built our analysis notebooks and tutorials around the Google
Colab and recommended that it be used with our customised Jupyter notebook
server.

Google Colab is not without its floors however for our purposes. Connecting the
user interface to the notebook server is a clunky affair, the interface is
geared toward using Google's cloud compute and storing documents in Google
Drive. It is also not available for users in some territories.

To simplify the EPI2MELabs experience for our growing userbase, starting with
version 0.2.6 we are recommending that users no longer use the Google Colab
interface and instead use the more standard JupyterLab interface included with the
EPI2MELabs server software. The EPI2MELabs Launcher application has been
updated to version 0.6.5 and streamlines the opening of the interface. We will
no longer be supporting the use of EPI2MELabs with Google Colab.

But what of the reasons given above for not using JupyterLab from the outset?
In the last month we have worked hard to optimise of analysis notebooks and
tutorials for the JupyterLab interface. This has involved adding additional
functionality to JupyterLab; small user interface tweaks have been made here
and there to create a more comfortable experience. Of particular note, on
opening EPI2MELabs in their browser users will now be shown a list of all
available analyses and tutorials. When selecting a notebook template a copy
will be made an stored on the users computer. It may be edited and saved freely
without fear of irreveribly losing the original template. The users saved
notebooks can also be reopened from the launch page providing a convenient
location to start new analyses, or resume old ones.

This work has not finished: we intend to further enhance the visual display of
code within Jupyterlab to provide a more enticing experience for all users.
These efforts will be contributed back to the wider Jupter community.

