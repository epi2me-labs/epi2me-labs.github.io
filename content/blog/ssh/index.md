---
title: Running epi2me labs on remote computers
date: "2021-03-17T18:37:00.000Z"
description: "How to run epi2me labs on remote computers."
tags: ssh tutorial epi2melabs
---
###  Introduction to running things remotely

This blog post is a short introduction to running epi2me labs on a remote machine that you have access to.  
This means you can still use the straight forward graphical interface for running the applications while utilising the 
greater compute power available on these remote servers.  
This is useful for those who have a separate computer that is more powerful than the one they're currently operating. 
This is a common setup in research institutions where you may have a less powerful work laptop and access to a much more 
powerful server for running more intensive software. (It is also possible to use this to bypass more stringent network controls!)

To do this we will be using `ssh`.  SSH (Secure Shell) is a method that enables you to run commands on a remote machine from your local machine safely.
This can be achieved using an ssh client -  a program that can establish this kind of connection. UNIX-style systems e.g. 
OSX/ubuntu etc can create an SSH tunnel via the command ssh.  
If you habitually run software on a separate server then you will already be familiar with this command to connect to a terminal on your server:

```bash
# ssh <server>

ssh myserver
```

With some additional arguments you can set this up so that information that is exposed on a particular port is presented on your host 
machine as if it were your remote machine. 

### Setting up an SSH Tunnel for EPI2ME Labs

It is important that the port that you provide is not currently being used by something else. 
This means that if you are running the EPI2MELabs Launcher on your local machine then you will need to change some of the configuration 
if you want to run the remote version at the same time.  This will be discussed below.

EPI2MELabs Launcher by default uses two ports, 8888 and 8889.  
This can be customised in the GUI version of the launcher in the settings/preferences dialogue.  
We build on the first ssh command by adding a couple of command line args and port information.  
This:

* `-X` or `-Y`: Tells your remote machine that you want the application displays from your remote machine on your local machine (X11 forwarding).  Please note that -X is more secure but might render things slower, -Y is faster but less secure, you should only use this on servers that you trust as much as your local machine.
* `-L` Connect specific ports e.g.  so that when you look at 8888 in your browser you are actually looking at what 8888 is displaying -on your remote machine. 

```bash
# -X Enables X11 forwarding
# -L Which port/sockets to on the local (client) host are to be forwarded to the remote machine
# destination 

ssh -X -L 8888:localhost:8888 -L 8889:localhost:8889 myserver
```

### Troubleshooting (skip this step if launcher window loads correctly)

If you run this command and the launcher window does not appear on your host machine and you get the error message:
```bash
Error: Can't open display: 
```
This means that is isn't sure where to display the GUI window.  
One way to achieve this is to tell the terminal that you want your GUI to display on your monitor.  
We do this by assigning a value to the environment variable DISPLAY.  
Because we only want this value to change while running this command and not change the environment 
variable on your host machine in general we don't export the variable but prepend the assignment 
to the ssh command (see example below).
```
# <VARIABLE>=<VALUE> <COMMAND>
DISPLAY=:0 ssh...
So the final command will be:
```
> **_NOTE:_** Remember to replace myserver with your server address!

```
DISPLAY=:0 ssh -Y -L 8888:localhost:8888 -L 8889:localhost:8889 myserver
```
If this doesn't work please contact your local IT department as there may be custom configurations peculiar to your setup to be made.

###  Navigating to the EPI2ME Labs landing page
Then once you are on the remote machine, run the launcher as you would do normally. You can run the headless or GUI version of the launcher and connect to it like you would normally in your browser.

Open your web browser and go to:

(https://localhost:8888)[https://localhost:8888]

If your launcher is running you should be now faced with the jupyter login page.  You need to enter the token for your launcher.

> **_NOTE:_** The default token is "EPI2MELabs" however we recommend that you change this when appropriate.

