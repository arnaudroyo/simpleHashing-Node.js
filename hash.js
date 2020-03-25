const crypto = require('crypto');
var fs = require('fs');

// Get process.stdin as the standard input object.
var standard_input = process.stdin;

standard_input.setEncoding('utf-8');
console.log("Please input ur password.");

// When user input data and click enter key.
standard_input.on('data', function (data) {
        const hash = crypto.createHmac('sha256', data)
                           .update('MySalt')
                           .digest('hex');
        console.log('hash(256): ' +hash);

    //update file
    fs.appendFile('myHashingFile.txt',hash + '\n', function (err) {
        if (err) throw err;
        console.log('Saved in file! Type another passoword:');
    });
});

