---
title: EPI2ME Labs Launcher Command-line interface
date: "2021-02-10T00:00:00.000Z"
description: "This post details how the EPI2ME Labs Launcher can now be controlled from the command-line, without resorting to a graphical interface."
tags:
---


Feedback from EPI2ME Labs users revealed the desired for people to be able to control the
running of the EPI2ME Labs notebook server from the command-line without opening a
graphical user interface. Such users are typically running the server on a different,
and more computationall capable, computer from where they are using the notebook 
web interface.

With the [v1.0.8 release](/downloads) of the launcher we have introduced the ability
to start, stop, and check the status of the EPI2ME Labs notebook server from the
command-line. The application is install to

    /usr/local/bin/EPI2ME-Labs-Launcher/EPI2ME-Labs-Launcher

on Linux systems. On Ubuntu systems this is aliased as two commands, `labslauncher` and
`labsmanager`, installed to:

    /usr/local/bin

which is typically listed in the `PATH` environment variable.

Running the `EPI2ME-Labs-Launcher` (or `labslauncher` shortcut) will run the standard
EPI2ME Labs Launcher with a graphic interface, and with logging to the terminal. However
running:

    /usr/local/bin/EPI2ME-Labs-Launcher/EPI2ME-Labs-Launcher manager --help

(or simply `labsmanager --help` on Ubuntu) will initiate a simple command-line interface.
The interface has the following commands:

```
  --start      Start the server.
  --restart    Restart the server.
  --stop       Stop a running server and cleanup resources.
  --status     Report server status.
  --update     Update server.
```

all of which should be fairly self-explanatory. The program will alert users if
updates are available for the server or for the program itself. The last
command in the above can be used to update the notebook server component. For
updates to the Launcher application users should continue to download these
from the [downloads](/downloads) page. (Users on Oxford Nanopore Technologies
sequencing devices can also upgrade the Launcher through `apt`).

When starting an EPI2ME Labs notebook server the full array of options
available in the graphical application are available to be set; running the
`--help` command will display these. In contrast to the graphical interface,
when using the command-line options are not stored in the applications settings
for subsequent use: users wishing to override the default value of options must
supply these options every time the program is run. This provides a more
natural command-line interface.

We hope that users will find the new command-line interface useful and look
forward to feedback.
