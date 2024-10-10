const {fileRead, fileWrite} = require('./fileManager');
const {checkDate, checkName} = require('./dataValidation');

const main = () => {
    const events = fileRead();

    const validEvents = events.filter((event) => checkDate(event.date));

    const updatedEvents = validEvents.map(event => {
        return {
            ...event,
            validName: checkName(event.name)
        }
    })

    fileWrite(updatedEvents);
}

main();