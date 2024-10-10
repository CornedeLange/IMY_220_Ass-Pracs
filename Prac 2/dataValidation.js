
const checkDate = (date) => {
    const eventDate = new Date(date);
    const startDate = new Date('2024/09/10');
    const endDate = new Date('2024/09/21');

    return eventDate >= startDate && eventDate <= endDate;
}

const checkName = (name) => {
    return /^[a-zA-Z0-9 ]+$/.test(name);
}

module.exports = {checkDate, checkName};