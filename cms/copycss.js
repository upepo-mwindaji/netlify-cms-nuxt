const fs = require('fs');

const reg = /([a-z]+)\..*\.css$/

const copyFromTo = function(fromDir, toDir) {
  // console.log('walking through', fromDir);
  if (!fs.existsSync(toDir)) {
    console.log('make dir', toDir);
    fs.mkdirSync(toDir);
  }
  var list = fs.readdirSync(fromDir);
  list.forEach(function(file) {
    // console.log('checking ', file)
    file = fromDir + '/' + file;
    var stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      copyFromTo(file, toDir);
    } else {
      let match = reg.exec(file )
      if (Array.isArray(match)) {
        fs.copyFile(fromDir + '/' + match[0], toDir + '/' + match[1] + '.css', (err) => {
          if (err) throw err;
          console.log('copied ', fromDir + '/' + match[0], toDir + '/' + match[1] + '.css')
        });
      }
    }
  });
}

const dir = process.argv[2]
if (dir === 'build') {
  copyFromTo('.nuxt/dist','.nuxt/dist/admin');
}
if (dir === 'generate') {
  copyFromTo('dist', 'dist/admin');
}
