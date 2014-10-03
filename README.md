html-content-player
===================

Pearson Learning's HTML content player. A media player for HTML animations, particularly Adobe Edge Animate projects.


### Prereqs
* [nodejs](http://nodejs.org/)
* [grunt](http://gruntjs.com/getting-started)

## Creating Development Environment

The development environment follows industry standard practices by using nodejs and grunt for setting up a server to test against.  Changes to the player code should only happen while running the code within this environment for several reasons, one of which is the server that we run sets many response headers that are necessary for accurate timeline scrubbing and sync between audio and animation.

**1) Install Node** - Download and install Nodejs from [their website](http://nodejs.org/)

**2) Install Grunt** - Once Node is installed, run `npm install -g grunt-cli` to install the global commandline interface for Grunt.  
   <sup>_Grunt is a task runner that performs several things for us including running a server, and concatenating and minifying files, etc..._</sup>

**3) One-time installs** - Once you've cloned the repository, change into its directory and run the following commands:
```
npm install
```
The commands above downloads the dependencies needed for Grunt to run the server, minify files, etc...

## Running Locally
You can run the solution locally with the following command:
```
$ grunt start
```
That should automatically open the test page in your default browser, if not, navigate to:

[http://localhost:8000/tests/all-tests.html](http://localhost:8000/tests/all-tests.html) to view all of the test animations.

grunt is a task runner that is used for many things in the development workflow.  The above command is starting a node server and watching directories for changes.

## Versioning
The version number needs to be manually updated as needed.  We use symantic versioning as defined here:
[http://semver.org](http://semver.org)

## Releasing to Production
(Need steps once we define the process)

