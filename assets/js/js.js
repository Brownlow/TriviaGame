// Create array of questions
questions = [
	{
		"title": "question1",
		"question": "What Station was Braking Bad on?",  
		"answers": [
			{
				"number": "1",
				"answer": "AMC",
				"dataValue": true
			}, 
			{
				"number": "2",
				"answer": "TBS",
				"dataValue": false
			},
			{
				"number": "3",
				"answer": "CNN",
				"dataValue": false
			},
			{
				"number": "4",
				"answer": "FOX",
				"dataValue": false
			}
		], 
		"rightAnswerImage": "/images/bb-amc.jpg",
		"wrongAnswerImage": "/images/wrong.gif",
	},
	{
		"title": "question2",
		"question": "Who was the first person to die in the series",
		"answers": [
			{
				"number": "1",
				"answer": "Tuco",
				"dataValue": false
			}, 
			{
				"number": "2",
				"answer": "NoDoze",
				"dataValue": false
			},
			{
				"number": "3",
				"answer": "Jesse's Girlfriend",
				"dataValue": false
			},
			{
				"number": "4",
				"answer": "Emilio Koyama",
				"dataValue": true
			}
		], 
		"rightAnswerImage": "",
		"wrongAnswerImage": "",
	},
	{
		"title": "question3",
		"question": "What Drug Did Walter and Jesse Manufacture",
		"answers": [
			{
				"number": "1",
				"answer": "Exstacy",
				"dataValue": false
			},
			{
				"number": "2",
				"answer": "Crystal Meth", 
				"dataValue": true
			},
			{
				"number": "3",
				"answer": "PCP", 
				"dataValue": false
			},
			{
				"number": "4",
				"answer": "Shrooms",
				"dataValue": false
			}
		], 
		"rightAnswerImage": "",
		"wrongAnswerImage": "",
	},
	{
		"title": "question4",
		"question": "What was Walter's Favorite way to kill people",
		"answers": [
			{
				"number": "1",
				"answer": "Bare Hands",
				"dataValue": false
			},
			{
				"number": "2",
				"answer": "With Science", 
				"dataValue": true
			},
			{
				"number": "3",
				"answer": "Guns", 
				"dataValue": false
			},
			{
				"number": "4",
				"answer": "Knives",
				"dataValue": false
			}
		],  
		"rightAnswerImage": "",
		"wrongAnswerImage": "",
	},
	{
		"title": "question5",
		"question": "How Did The Old Man in The Wheelchair (Hector Salamanca) Piss Off The Cops",
		"answers": [
			{
				"number": "1",
				"answer": "He Yelled A Lot",
				"dataValue": false
			},
			{
				"number": "2",
				"answer": "He Shit Himeself", 
				"dataValue": true
			},
			{
				"number": "3",
				"answer": "He Threw Stuff At Them", 
				"dataValue": false
			},
			{
				"number": "4",
				"answer": "Shrooms",
				"dataValue": false
			}
		], 
		"rightAnswerImage": "",
		"wrongAnswerImage": "",
	},
];


// Variables ---------------------------------------

var intervalId;
var answerCorrect = 0;
var answerWrong = 0;
var noAnswer = 0;
var stopwatch = {};
var qCounter = 0;



// Start Button Initializes Game ---------------------------------------

$('#start-button').on('click', function(){
	startGame();
})


// Set Up Timer ---------------------------------------

function setTimer(){
	var stopwatch = {
		time: 30,
	}

	intervalId = setInterval(countDown, 1000);

	function countDown(){
		stopwatch.time --;

		$('#countDown').html(stopwatch.time);

		if(stopwatch.time === 0){
			clearInterval(intervalId);
			$('#questionsAndAnswers').css('display', 'none');
			$('#memes').css('display', 'block')
		}
	}

	
}




function startGame(){


	// remove start game button
	$('#start-button').css('display', 'none');
	$('#questionsAndAnswers').css('display', 'block');

	// Show timer and start
	setTimer();

	/// Load Question
	buildQuestion();
}

function buildQuestion(){

	var qAndA = $('<div id="qAndA">');
	qAndA.addClass(questions[qCounter].title);
	// Add Question
	qAndA.append('<h3>' + questions[qCounter].question + '</h3>');
	// Add Question 1
	qAndA.append('<div class="answers ' + questions[qCounter].answers[0].number + '">' + questions[qCounter].answers[0].answer + '</div>');
	$('.1').attr('data-value', questions[qCounter].answers[0].dataValue);
	// Add Question 2
	qAndA.append('<div class="answers ' + questions[qCounter].answers[1].number + '">' + questions[qCounter].answers[1].answer + '</div>');
	$('.2').attr('data-value', questions[qCounter].answers[1].dataValue);
	// Add Question 3
	qAndA.append('<div class="answers ' + questions[qCounter].answers[2].number + '">' + questions[qCounter].answers[2].answer + '</div>');
	$('.3').attr('data-value', questions[qCounter].answers[2].dataValue);
	// Add Question 4
	qAndA.append('<div class="answers ' + questions[qCounter].answers[3].number + '">' + questions[qCounter].answers[3].answer + '</div>');
	$('.4').attr('data-value', questions[qCounter].answers[3].dataValue);
	$('#questionsAndAnswers').append(qAndA);
	$('.question1').css('display','block');




}




$('.answers').on('click', function(){

	if(questions[qCounter].answers.dataValue === true){
		qCounter++;
		answerCorrect();
		console.log('yup');
	} else{
		qCounter++;
		answerWrong();
		console.log('nope');
	}
})


function answerCorrect(){

	$('#questionsAndAnswers').css('display', 'none');
 	$('#memesAndPics').css('display', 'block');
 	$('#memesAndPics').append(questions[qCounter].rightAnswerImage);
 	answerCorrect++;
}

function answerWrong(){
	
	$('#questionsAndAnswers').css('display', 'none');
	$('#memesAndPics').css('display', 'block');
	$('#memesAndPics').append(questions[qCounter].wrongAnswerImage);
	answerWrong++;
}


// End game when all questions are done
if (qCounter === questions.length){

	console.log('game over');
}



