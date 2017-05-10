# Local.dev [![NPM Package Downloads](https://img.shields.io/npm/dt/local.dev.svg)](https://www.npmjs.com/package/local.dev) [![NPM Package Version](https://img.shields.io/npm/v/local.dev.svg)](https://www.npmjs.com/package/local.dev)

Mac users, please read the known issues part before installing the package.

## Port forwarding and renaming on localhost made easy
[![Demo](https://raw.githubusercontent.com/bbeldame/local.dev/master/demo.gif)](https://raw.githubusercontent.com/bbeldame/local.dev/master/_demo.mp4)

Local.dev offers you a simple command line to improve your node workflow by providing easy and persistant port forwading on localhost.

Did you already struggled to remember all of those localhost:port that you juste create ? Or don't you want to rename the boring localhost:8080 to whatever.dev ? Because I did !

With local.dev, you can rename any localhost:port to any name possible, you don't even need to add a domain dot if you don't feel like it.

## :cd: Installation

```
npm install -g local.dev
```

## :zap: Usage

Every command can be made with `localdev` instead of `local.dev`.

Add a new local.dev url. You will need the **root priviliges** for this one
```
local.dev add 8080 this-cool-url
```

List all of your local.dev active
```
local.dev list
```

Remove a local.dev
```
local.dev rm this-cool-url
```

## :calendar: Future updates

- [x] Windows compatibility
- [ ] Linux compatibility
- [x] Remove command
- [ ] Persistant host on Mac

## :scream: Known issues

The local.dev is reset if the mac shutdown.

To set it again, you have to delete it first with ` local.dev rm your-site ` . It's a work in progress for this one, I have to find a good solution to edit the pf.conf file.

Mutliple local.dev doesn't work on mac, still a problem with pf.conf.

Renaming only one localhost at a time makes this package useless on Mac, I wouldn't recommend using it for the moment. Work in progress.