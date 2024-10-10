class Poll 
{
    constructor(array)
    {
        this.cat = array;
    }

    vote(name)
    {
        return this.cat.filter((cat) => cat.name === name)[0].votes++;
    }

    getVotes()
    {
        return this.cat;
    }
}

module.exports = Poll;