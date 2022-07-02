const fs = require('fs');
const process = require('process');
const axios = require('axios');

const cat = path => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            process.kill(1)
        }
        console.log(data);
    })
}



async function webCat(url) {
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
    webCat(path);
} else {
    cat(path);
}