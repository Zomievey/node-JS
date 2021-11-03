const path = require('path');
const fs = require('fs');

const chirps = [
    {
        name: 'Haylee',
        message: 'Whats up'
    },
    {
        name: 'Haylee',
        message: 'Whats up'
    },
    {
        name: 'Haylee',
        message: 'Whats up'
    },
    {
        name: 'Haylee',
        message: 'Whats up'
    },
    {
        name: 'Haylee',
        message: 'Whats up'
    }];

fs.writeFile('chirps.json', JSON.stringify(chirps), (err) => {
    if (err) throw err;
        
});

fs.readFile("./chirps.json", (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
});


