const fs = require('fs');
const process = require('process');

const cat = path => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            process.kill(1)
        }
        console.log(data);
    })
}

cat(process.argv[2]);