/* global rm, cp, ls*/
require('shelljs/global');
var fs = require('fs');

var matches = ls('../example-d3-react-gh-pages');
if (!(matches && matches.length)) {
  throw new Error('Expected to find "../example-d3-react-gh-pages/"');
}

console.log('Cleaning contents of directory "../example-d3-react-gh-pages/"...');
rm('-rf', '../example-d3-react-gh-pages/*');

console.log('Copying "dist/" to "../example-d3-react-gh-pages/"...');
cp('-rf', 'dist/*', '../example-d3-react-gh-pages');

console.log('Finished updating gh-pages folder. Remember to `git push`.');
