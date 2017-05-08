#!/usr/bin/env node

const program = require('commander');
const localdev = require('../');

let activated = 0;

program
  .version(require('../package.json').version)
  .usage('[command] <options>')
  .description('Local.dev helps you redirect local url to localhost:port');

program
  .command('list')
  .description('list all the loca.dev url already allocated')
  .action(() => {
    activated = 1;
    localdev.list();
  });

program
  .command('add')
  .description('add a new local url and forward it to the chosen port')
  .arguments('<port> <url>')
  .action((port, url) => {
    activated = 1;
    localdev.add(port, url);
  })
  .on('--help', () => {
    console.log('  Examples:');
    console.log();
    console.log('    $ add 3000 auth.dev');
    console.log('    $ add 8080 whatacoolwebsite.dev');
    console.log();
  });

program
  .command('remove')
  .alias('rm')
  .description('remove a local.dev')
  .arguments('<url>')
  .action((url) => {
    activated = 1;
    localdev.remove(url);
  })
  .on('--help', () => {
    console.log('  Example:');
    console.log();
    console.log('    $ remove auth.dev');
    console.log();
  });

if (!process.argv.slice(2).length || activated) {
  program.outputHelp();
}

process.argv[1] = 'local.dev';
program.parse(process.argv);
