const fs = require('fs');

const fileRead = () => {
    const data = fs.readFileSync('events (2).json', 'utf-8');
    return JSON.parse(data);
}

const fileWrite = (content) => {
    const jsonData = JSON.stringify(content, null, 2);

    fs.writeFileSync('newEvents.json', jsonData, (err)=>{
        if(err) throw err;
    })
}

module.exports = {fileRead, fileWrite};
