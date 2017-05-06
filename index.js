const program = require('commander');
 
program
  .version('0.0.1')
  .description('local.dev creates a new local url and forward it to the chosen port')
  .arguments('[port] [url]')
  .action(launch);

program.on('--help', function(){
  console.log('  Examples:');
  console.log('');
  console.log('    $ local.dev 8080 auth.dev');
  console.log('    $ local.dev 8088 images.api');
  console.log('');
});

program.parse(process.argv);

function launch(port, url) {
  console.log(port);
  console.log(url);
}