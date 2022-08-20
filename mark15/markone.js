/*Project: Do you know me? CLI Quiz App

CLI quiz app (Do you know me?) that Tanay built in the session. If you've made project with some other topic that's fine too.
Sub-tasks:

The quiz can be "Do you know me" or a similar CLI QUIZ on any other topic too. Take Username as input.
Have at least 5 questions.
Display the final score to the user*/

var readlineSync = require("readline-sync")
var score = 0

var highScore = [
{n:"XYZ",s:5},
{n:"ABC",s:4}]

function welcomeMessage(){
	console.log("WELCOME TO --- DO YOU KNOW ME QUIZ ---")
	var userName = readlineSync.question("Enter your name: ")
	console.log("Hi ", userName, "! Would you like to play?")
	var flag = readlineSync.question("Enter Y to play N to exit: ")
	return [flag, userName]
}


function topicSelect(){
	topics = ['Friends','Harry Potter']
	userSelect = readlineSync.keyInSelect(topics,'What is your topic of interest?') //This launches an MCQ type of input
	console.log('Launching ',topics[userSelect],' quiz!')
	return userSelect
}

var hpQuestionR1 = [
{q:"Which author wrote the Harry Potter books?(Write only author's title)", a:"Rowling"},
{q:"Which Hogwarts house color is blue?", a:"Ravenclaw"},
{q:"What is Dumbuldore first name?", a:"Albus"},
{q:"Who revealed to Harry that he was a wizard?", a:"Hagrid"},
{q:"Who is Tom Riddle?", a:"Voldemort"}]

var friendsQuestionR1 = [
{q:"Who was Monica's first ever kiss?", a:"Ross"},
{q:"How many sisters Joey has? (Write in words)", a:"Seven"},
{q:"What is Chandler's middle name?", a:"Muriel"},
{q:"How many pages were in letter Rachel wrote to Ross (front and back)? (Answer in words)", a:"Eighteen"},
{q:"Who said 'You will always be the guy who peed on me.'?", a:"Monica"}]

var topicR1 = [friendsQuestionR1, hpQuestionR1]

function playR1(question,answer){
	var userAnswer = readlineSync.question(question)
	if (userAnswer.toUpperCase()===answer.toUpperCase()){
		console.log("right answer")
		score += 1
	}
	else{
		console.log("wrong answer")
	}
	console.log("Your score is: ", score)

}

function gameOn(topic){
	for (var i =0; i<topicR1[topic].length; i++){
		playR1(topicR1[topic][i].q, topicR1[topic][i].a) 
		//Here topicR1 is array, topic is user return value 1-Friends, 2-HP, i = question number, q = question and a = answer.
	}
}

function displayScore(){
	console.log("***************************************")
	console.log("\n")
	console.log("Your score in this round is ", score)
	console.log("Check out high scores: ")

}

var t = welcomeMessage()      //Learning : JS does not return multiple values. So using an array to store return of welcome function
while (t[0].toUpperCase() === 'Y'){
	var topic = topicSelect()
	gameOn(topic)
	displayScore()
	for (var i =0; i<highScore.length; i++){
		console.log(highScore[i].n,"scored ",highScore[i].s)
	}
	console.log(t[1],"scored",score)
	console.log("\n")
	t = readlineSync.question("Wanna play again? Enter Y to play N to exit: ")
}

/*
Expand program to create a round 2 of MCQ for both HP and Friends
*/







