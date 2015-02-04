# Boilerplate NgLib
[![Build Status: Linux](http://img.shields.io/travis/cork-labs/boilerplate-nglib/master.svg?style=flat-square)](https://travis-ci.org/cork-labs/boilerplate-nglib)

> Boilerplate for AngularJS libraries.

The goal of this boilerplate is to make your life easier developing AngularJS libraries. We put this together to remove
the friction involved in splitting a large project across many maintainable repos. We hope this effort will contribute
to better software architecture through smaller, isolated, testable, stable and documented components.

Keep in mind that this project is still very much a WIP (see Todo below). Ideas and contributions are welcome, feel free
to use the issues section or do the usual fork and pull request routine.

## Getting Started

```
$ sudo npm install -g grunt-cli bower
$ npm install
$ bower install
$ ./bootstrap.sh
$ grunt develop
```

## Quick Guide

Main features:
- Automate al the tasks
- Easily configure the existing or new build/dist tasks
- Generate useful documentation without effort
- Test all your code, generate code coverage reports effortlessly
- Focused on generating diverables
- Travis ready
- Bundled with nice utils for hitting the ground running and releasing without friction
- Fully documented

Checkout the [documentation](http://jarvis.cork-labs.org/boilerplate-nglib/current/docs) for detailed information on all
the boilerplate features.

### Grunt Develop

```
$ grunt develop
```

Runs the whole build process, including tests and example page generation, launches the development server at
`http://localhost:8000/` in `keepalive` mode and starts watching for changes.

### Grunt Devserver

Included development server launches on `http://localhost:8000/` and is usefull to browse the documentation and coverage reports.

Killing `grunt develop` watch process will kill the dev server.

If you want to run the server standalone run `grunt serve:build:keepalive` or simply

```
$ grunt devserver
```

### Grunt Karma

Two test configurations are included: **build** for development tests and **dist** for distribution/CI environments
where the actual `dist` package is tested.

```
karma:build
```

#### Coverage

Istambul coverage reports are genearted during build and output to `build/coverage/`. They can loaded via the devserver
at `http://localhost:8000/coverage`.

#### Configuration

You will probably need to tweak your test targets, or even create new ones to include different scenarios.

Check the following in the `grunt/build.conf.js` file for the default configuration:

- `files.karma_include`
- `vars.build_test.include`
- `vars.dist_test.include`

Note that the generated template modules (destination of `html2js` targets) are also loaded during `grunt karma:buld`.
These are added to the target directly in `grunt/config/build.js`.

For advanced settings you can tweak the options in `grunt/options/karma.js`.

#### Troubleshooting

To troubleshoot, `grunt karma:build --verbose` and `grunt karma:dist --verbose`  are your friends.
They will list all the plugins and files served and loaded by karma.

The most common problem is some dependency not being loaded.

### Grunt Docs

The documentation pages can be generated directly by running `grunt docs`.

Documentation pages are also generated during `grunt develop` and then updated via the watch task. We find these most
useful to provide a development environment where the component is interacting with client code without the need for a
whole application (no more symlinks and no more context switching in your head).

With examples in your documenation you can also simulate interaction with other libraries (for instance with/without
jQuery) and, if your component includes UI you can demonstrate all your use cases and play with it while developing.


### Grunt Dist

```
$ grunt dist
```

Runs the whole dist process and generates `dist/`. This includes all checks and running tests - the `karma:dist` target.

See `grunt/tasks/dist.js` for the complete list of steps.


### Release Tasks

```
$ grunt release:patch
$ grunt release:minor
$ grunt release:major
```

Manually running release steps one by one.

```
$ grunt release minor
$ grunt bump-only:minor
$ grunt changelog
$ grunt bump-commit
```

### Configuration

Configuration uses the following Grunt plugins:
- [group-grunt-tasks](https://github.com/cork-labs/group-grunt-tasks) - dynamically generate task groups from tagged targets.
- [load-grunt-config-data](https://github.com/cork-labs/load-grunt-config-data) - load and merge grunt configuration data.
- [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) - automatically load grunt tasks based on `package.json`.

Configuration is split across:
- `grunt/build.conf.js` - definitions only:
  - `paths` and  `files` - patterns used by tasks
  - `vars` - set up dynamically generated tasks, e.g., tpl modules, less src/dest pairs, docs sections
- `grunt/options/*.js` - base options for grunt tasks
- `grunt/config/*.js` - specific targets and groups (some generated dynamically)
- `grunt/tasks/*.js` - task groups


### Troubleshooting:

Grunt `--verbose` is your friend. It will tell you a lot about what's going on.

```
grunt develop --verbose
```

## [MIT License](LICENSE)

[Copyright (c) 2005 Cork Labs](http://cork-labs.mit-license.org/2015)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
