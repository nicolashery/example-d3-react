/* global rm, mkdir, exec, ls*/
require('shelljs/global');
var fs = require('fs');

console.log('Cleaning output directory "dist/"...');
rm('-rf', 'dist');
mkdir('-p', 'dist');

console.log('Bundling all the things...');
exec('webpack --output-file \'bundle.[hash].js\' --devtool source-map --colors --progress');

function getBundleFilename() {
  var matches = ls('dist/bundle.*.js');
  if (!(matches && matches.length)) {
    throw new Error('Expected to find "dist/bundle.[hash].js"');
  }
  return matches[0].replace('dist/', '');
}

console.log('Copying "index.html"...');
var indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace('bundle.js', getBundleFilename());
indexHtml.to('dist/index.html');

console.log('Build successfull');
