const questions = [
    {
        category: 'fruit',
        question: 'what is your fav. fruit?',
        choices: ['banana', 'mango', 'apple'],
        answer: 'mango'
    },
    {
        category: 'veg',
        question: 'what is your fav. veg?',
        choices: ['gogo', 'mgo', 'app'],
        answer: 'gogo'
    },
    {
        category: 'game',
        question: 'what is your fav. game?',
        choices: ['coc', 'pubg', 'chess'],
        answer: 'chess'
    },
    {
        category: 'skill',
        question: 'what is your fav. skill?',
        choices: ['swimimng', 'running', 'jumping'],
        answer: 'running'
    },
    {
        category: 'place',
        question: 'what is your fav. place?',
        choices: ['tokyo', 'sweden', 'egypt'],
        answer: 'tokyo'
    },
]

const getRandomQuestion = (arr) => {
    const random = Math.floor(Math.random()*arr.length);
    return arr[random];
}

const getRandomComputerChoice = (arr) => {
    const random = Math.floor(Math.random()*arr.length);
    return arr[random];
}

const ques = getRandomQuestion(questions);
const ans = getRandomComputerChoice(ques.choices);

const getResults = (ques, ans) => {
    if (ques.answer === ans){
        return `The computer's choice is correct!`;
    }
    else {
        return `The computer's choice is wrong. The correct answer is: ${ques.answer}`;
    }
}

console.log(getResults(ques, ans));