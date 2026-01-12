const poll = new Map();

const addOption = (option) => {
    if(!option){
        return `Option cannot be empty.`;
    }
    else if (!poll.has(option)){
        poll.set(option, new Set())
        return `Option "${option}" added to the poll.`
    }
    else {
        return `Option "${option}" already exists.`
    }
}

const vote = (option, voterId) => {
    if (!poll.has(option)){
        return `Option "${option}" does not exist.`
    }

    const voters = poll.get(option);

    if (voters.has(voterId)){
        return `Voter ${voterId} has already voted for "${option}".`
    }

    voters.add(voterId);
    return `Voter ${voterId} voted for "${option}".`
}


addOption('PMLN');
addOption('PTI');
addOption('PPP');

vote('PTI', 1);
vote('PTI', 2);
vote('PPP', 3);

const displayResults = () => {
    let result = 'Poll Results:';
   
     poll.forEach((value, key)=>{
        result += `\n${key}: ${value.size} votes`;
    })

    return result;
 }

console.log(displayResults());