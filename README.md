# :bangbang: This package works for Windows and Mac OS X only for the moment :bangbang:

# Local.dev
[![Demo](https://raw.githubusercontent.com/bbeldame/local.dev/master/demo.gif)](https://raw.githubusercontent.com/bbeldame/local.dev/master/_demo.mp4)

Local.dev offers you a simple command line to improve your node workflow.

Did you already struggled to remember all of those localhost:port that you juste create ? Or don't you want to rename the boring localhost:8080 to whatever.dev ? Because I did !

With local.dev, you can rename any localhost:port to any name possible, you don't even need to add a domain dot if you don't feel like it.

## :scream: Full disclosure

The local.dev is reset if the mac shutdown, and can't be readded without deleting it in the /etc/hosts. It's a work in progress, I have to find a good solution to edit the pf.conf file.

I would recommend waiting for the remove command to be added.

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

## :calendar: Future updates

- [x] Windows compatibility
- [ ] Linux compatibility
- [ ] Remove command
- [ ] Persistant host on Mac
