const readlineSync = require("readline-sync");
const chalk = require('chalk');

var score = 0;
var highScores = [
  {
    name: "Sam",
    score: 5,
  },

  {
    name: "Trent",
    score: 2,
  }
];

var questions = [{
  question: "Where do I live? \n",
  answer: "Purulia"
}, {
  question: "What is my favourite sport? \n",
  answer: "Football"
},
{
  question: "Where do I study? \n",
  answer: "Acharya"
},
{
  question: "When was I born? \n",
  answer: "1999"
},
{
  question: "What do I prefer Hills or Beaches? \n",
  answer: "Hills"
}
];

function welcome() {
 var userName = readlineSync.question("What's your name? \n");

  console.log("Welcome "+ userName + " DO YOU KNOW Susanto?");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) { 
    console.log(chalk.green("Right!"));
    score = score + 1;
    
  } 
  else {
    console.log(chalk.red("Wrong!"));
   
  }

  console.log(chalk.blue("Current score: ", score));
  console.log("------------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  if (score > 0)
    console.log("YAY! You SCORED: ", score);
  else
    console.log("Sorry! You SCORED: ", score);

  console.log(chalk.bgCyan("---------------------------"));
  console.log(chalk.bgCyan("Check out the high scores!!"));
  console.log(chalk.bgCyan("---------------------------"));

  highScores.map(user => console.log(user.name, " : ", user.score));
}


welcome();
game();
showScores();
