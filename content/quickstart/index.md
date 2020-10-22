---
title: EPI2MELabs Quick Start Guide
date: "2020-10-22T00:00:00.000Z"
description: "Getting started with EPI2MELabs"
---

# EPI2MELabs Quick Start Guide

The following guide illustrates installation and use of the EPI2ME Labs notebook server. 

EPI2ME Labs can also be run on Windows 10, macOS and Linux. For Windows and macOS platforms follow the instructions at [Docker Desktop](https://docs.docker.com/desktop/) to install Docker. *Docker installations through Docker Toolbox are not supported. Please also be sure to select the Hyper-V option during installation.* The EPI2ME Labs Launcher application is available for these platforms from the [Software Downloads](https://community.nanoporetech.com/downloads) page on the Nanopore Community or the [GitHub release](https://github.com/epi2me-labs/labslauncher/releases/latest) page. Please see also the Windows/MacOS Docker Install section below.

## Installation

The EPI2ME Labs server runs in a [Docker](https://www.docker.com/resources/what-container) container in order to provide an isolated and resettable environment. It can be controlled using the EPI2ME Labs launcher application. The instructions below will install both of these tools onto your system


### GridIon/PromethION Docker install

Docker is not currently installed by default on GridION devices. To install docker follow the instructions below.

 1. Click on the **Search your computer** button.

#TODO: image

2. Search for "terminal", and click on the Terminal application:


#TODO: image

A terminal window will open:

#TODO: image

3. Run the Docker installation command (you can copy and paste this into the terminal window and press **Enter**):
   ```
   sudo apt update
   sudo apt install docker.io
   sudo usermod -aG docker <username>
   ```
where `<username>` should be replaced with your computer username.

4. Close your terminal window.
5. Log out of your GridION and log back in again.
6. Open a new terminal window.
7. To test docker is working correctly, run
   ```
   docker run hello-world
   ```

#TODO: image

<a name="win-osx-install"></a>
### Windows and macOS Docker install

EPI2ME Labs is supported on Windows 10 Profession (and Enterprise) and macOS through [Docker Desktop](https://docs.docker.com/desktop/). Use of Docker Desktop on Windows 10 Home through the use of Windows Subsytem for Linux 2 (WSL2) is untested. For the most part, users should simply follow the installation instructions for their system on the Docker website.


#### Data shares

During installation users may be asked to allow Docker access to parts of their file system; users should grant access to any locations where data resides they wish to analyse with EPI2ME Labs. In particular users are likely to want to add the MinKNOW output directory as a share in Docker.

It is possible to allow data shares to Docker after installation by opening the Docker Desktop program and navigating to its settings page:

#TODO: image

On Windows 10 it may be possible to avoid having to add folders manually in the Docker Desktop program by checking that application notifications are enabled in the system Settings:

#TODO: image

With notifications enabled, users may see pop-ups like the following when running the EPI2ME Labs launcher; users should click "Share it" in these instances.

#### Resource Limits

By default Docker Desktop sets fairly conservative resource limits for itself, you may wish to change these in the Docker Desktop settings pane. We recommend setting the Memory limit to at least 8Gb (some EPI2ME Labs tutorials may require more as indicated in their introductions) and the CPUs to one or two less than the maximum value for your system.

#TODO: image

### Install the EPI2ME Labs launcher application

The EPI2ME Labs launcher application provides a convenient way to start, stop, and update the EPI2ME Labs notebook server. The source code for the application is available in our GitHub [repository](https://github.com/epi2me-labs/labslauncher), but is easily installed on to a GridION device by following the instructions below.

1. Install the EPI2ME Labs launcher using the following commands (you can copy and paste this into the terminal window and press **Enter**):
    ```
    sudo apt update
    sudo apt install ont-epi2melabs-launcher
    ```
2. Click on the Search your computer icon, and search for "EPI2ME". Then click on the **EPI2ME-Labs Server Control** icon. This will start the launcher.

#TODO: image

## Start EPI2ME Labs from the launcher

The EPI2ME Labs launcher interface has all the functionality required for users to manage the EPI2ME Labs notebook server.

1. To start a notebook server click the **Start** button to reach the **Start Server** screen:

#TODO: image

There are three options on the Start Server page:
- **Select path:** the location on your computer which you want to be visible within the notebooks
- **token:** a security token (password) to allow access to the notebook interface
- **port:** network port to access the notebook server interface

#TODO: image

2. The data location is pre-filled with a default data path. To select a different folder, click **Select path** to show the selection dialog:

#TODO: image

3. Navigate the directory tree until the dialog is within your selected folder, then click **Open**.

4. We strongly encourage updating the token to a unique value. The token provides an authentication method that allows only trusted users access to the EPI2ME Labs server and is used as an additional security layer to help prevent other users on the network from running code and accessing data. This token will be used later in the workflow to connect Google Colaboratory to the server.

5. Click **Start** on the main screen to start the notebook server.



> **The first time a server is started the server components must be downloaded. This will not happen on subsequent server starts.**


When the server has successfully launched, there will be a message at the bottom of the launcher interface stating "Server status: running.":

#TODO: image

### Run a tutorial

With the EPI2ME Labs notebook server running, notebooks can be accessed and run.

1. Navigate to the [EPI2ME Labs Index](https://colab.research.google.com/github/epi2me-labs/resources/blob/dev/notebook_index.ipynb) notebook that contains a list of tutorials.
2. Select and click on one of the tutorials listed on the page.
3. To connect the the Google Colab interface to the EPI2ME Labs notebook server, click **Connect** in the top-right of the screen, then **Connect to local runtime...**

#TODO: image

4. Go back to the EPI2ME Labs launcher and copy the URL at the bottom by clicking on the blue URL link - this will copy the address to your clipboard.

#TODO: image

5. Return to your notebook in your web browser, and paste the URL into the local runtime, then click Connect.

#TODO: image

8. When you first open the tutorial, it will have outputs from example data. To clear outputs from example data, click **Edit**, then **Clear all outputs**.

#TODO: image

9. You can see all your data in the location you provided in the launcher by 

clicking **epi2melabs** in the sidebar:

#TODO: image

10. To copy your own data into the tutorial, right-click on the data file and select **Copy path**.


#TODO: image

11. Follow the guidance provided in the tutorial to perform data analysis.


### Updating the server

The EPI2ME Labs launcher application automatically detects when updates are available to the notebok server. Oxford Nanopore Technologies' may occassionally provide updates to provide new features or improved performance.

When an update is available attempting to start or restart the notebook server when an update is available will result in the following being displayed:

#TODO: image

1. To update the server, press the **Update** button on the main screen. The new server components will be downloaded:


#TODO: image

## EPI2ME Labs with Google Colaboratory

For users in territories where Google Colaboratory is not accessible, EPI2ME Labs can be used with the in-built [JupyterLab](https://jupyterlab.readthedocs.io/en/stable/user/interface.html) interface.

The JupyterLab interface to EPI2ME Labs has some technical differences -- these are addressed in this section. We encourage that the Google Colaboratory interface to EPI2ME Labs be used where possible.

### Installation of the Jupyter-optimised EPI2ME Labs Launcher

To install the Jupyter-optimised EPI2ME Labs Launcher on your GridION or PromethION run the following:

```
sudo apt install ont-epi2melabs-launcher-jupyter
```

This will replace an existing installation of the `ont-epi2melabs-launcher` application.
  
Installers for the Jupyter version are also available from the [Software Downloads](https://community.nanoporetech.com/downloads) page on the Nanopore Community or the [GitHub release](https://github.com/epi2me-labs/labslauncher/releases/latest) page.

There are no differences in the usage of the Jupyter version of the EPI2ME Labs Launcher; please review the preceding sections for details on the application.

### Accessing JupyterLab 

The process for starting a notebook server is identical to that outlined above in the *Start EPI2ME Labs from the launcher* section. In order to open the interface simply copy the server address from the launcher application and paste the address in a web browser.

There is no need to connect the Jupyter interface to the notebook server -- the components are already linked.

#TODO: image

To save a copy of the notebook in your working directory for later editing, click **File** and then **Save Notebook As...**. It is important that the provided filename be prefixed with `epi2melabs/`:

#TODO: image

### Locating and copying paths to your files

You can find your data from the location provided to the *EPI2ME Labs Launcher* by selecting `epi2melabs` from the file browser of the sidebar. A right-click opens the dialog that can be used to **Copy path** to the clipboard.

#TODO: image

### Running code cells

Running code cells in JupyterLab requires clicking the **play** button in the navigation bar at the top of the screen. There is also a **"Run"** tab that can be used to run multiple cells.

#TODO: image

### Bookmarks and navigating notebooks

The JupyterLab environment provides a table of contents menu in the left-hand sidebar. These navigation prompts can also be used to *fold* content visibility in the notebook.

#TODO: image



