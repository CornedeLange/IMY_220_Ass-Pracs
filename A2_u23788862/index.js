const socket = io();

socket.on('connect', message => {
    console.log('I connected with ID:', socket.id);
});


let poll = document.getElementById('poll');

poll.addEventListener('submit', (e) => {
    e.preventDefault();
    let choice = document.querySelector('input[name="catName"]:checked').value;

    if(choice)
    {
        socket.emit('vote', choice);
    }
});

socket.on('updateVotes', (poll) => {
    //**BEFORE LAST TASK**/

    // const name = catName;
    // const number = document.querySelector(`label[for="${name}"] span`);
    // //console.log(number.textContent);
    // number.textContent = parseInt(number.textContent) + 1;

    // const totalVotes = document.getElementById('total-votes');
    // totalVotes.textContent = parseInt(totalVotes.textContent) + 1;

    //**BEFORE LAST TASK**/

    let totalVotes = 0;
    poll.forEach(vote => {
        const number = document.querySelector(`label[for="${vote.name}"] span`);
        number.textContent = vote.votes;
        totalVotes += vote.votes;
    });

    document.getElementById('total-votes').textContent = totalVotes;
})