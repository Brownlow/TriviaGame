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
		"correctAnswer": "1",
		"rightAnswerImage": "../assets/images/bb-amc.jpg",
		"wrongAnswerImage": "https://media.giphy.com/media/knXVxRDG8SP1C/giphy.gif",
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
		"correctAnswer": "4",
		"rightAnswerImage": "https://media.giphy.com/media/osVVO6nubVPCo/giphy.gif",
		"wrongAnswerImage": "https://media.giphy.com/media/knXVxRDG8SP1C/giphy.gif",
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
		"correctAnswer": "2",
		"rightAnswerImage": "https://media.giphy.com/media/yE72eDy7lj3JS/giphy.gif",
		"wrongAnswerImage": "https://media.giphy.com/media/N9sS2pprB7V2E/giphy.gif",
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
		"correctAnswer": "2",
		"rightAnswerImage": "https://media.giphy.com/media/PZCQvgafIrYPK/giphy.gif",
		"wrongAnswerImage": "https://media.giphy.com/media/aN9wwG9wTwtk4/giphy.gif",
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
				"answer": "He Sold Meth",
				"dataValue": false
			}
		], 
		"correctAnswer": "2",
		"rightAnswerImage": "https://media.giphy.com/media/12Z4v34UXpOxR6/giphy.gif",
		"wrongAnswerImage": "https://media.giphy.com/media/r4luGBzBuk1O/giphy.gif",
	},
];


// Variables ---------------------------------------

var intervalId;
var answerCorrect = 0;
var answerWrong = 0;
var noAnswer = 0;
var stopwatch = {};
var qCounter = 0;
var answer;
var qAndA;



// Start Button Initializes Game ---------------------------------------

$('#start-button').on('click', function(){
	startGame();
})


// Set Up Timer ---------------------------------------

function setTimer(){
	var stopwatch = {
		time: 5,
	}

	intervalId = setInterval(countDown, 1000);

	function countDown(){
		stopwatch.time --;

		$('#countDown').html(stopwatch.time);

		if(stopwatch.time === 0){
			clearInterval(intervalId);
			$('#questionsAndAnswers').css('display', 'none');
			$('#memesAndPics').css('display', 'block');
			$('#memesAndPics').append('<img id="timesUp">');
			$('#timesUp').attr('src', questions[qCounter].wrongAnswerImage);
			$('#memesAndPics').append('<div class="memeMessage">');
			$('.memeMessage').html('TIMES UP')
			qCounter++;
			$('.' + questions[qCounter - 1].title).css('display','none');

			
			noAnswer++;

			setTimeout(startGame, 3000);

			if (qCounter === questions.length){

				gameOver();
			}
		}
	}
}

function startGame(){

	$('#memesAndPics').css('display', 'none');

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
    // Add all Questions
    for(var i = 0; i < 4; i++){
        var answer = $('<div>');
        answer.addClass(`answers ${i + 1}`);
        answer.text(questions[qCounter].answers[i].answer)
        answer.attr('data-value', questions[qCounter].answers[i].dataValue);
        qAndA.append(answer);
        
    }
    $('#questionsAndAnswers').append(qAndA);
    $('.' + questions[qCounter].title).css('display','block');
  
}

function answerCorrect(){

	$('#questionsAndAnswers').css('display', 'none');
 	$('#memesAndPics').css('display', 'block');
 	$('#memesAndPics').append(questions[qCounter].rightAnswerImage);
 	$('#memesAndPics').append('CORRECT ANSWER');
 	answerCorrect++;
}

function answerWrong(){
	
	$('#questionsAndAnswers').css('display', 'none');
	$('#memesAndPics').css('display', 'block');
	$('#memesAndPics').append(questions[qCounter].wrongAnswerImage);
	$('#memesAndPics').append('WRONG ANSWER');
	answerWrong++;
}

function gameOver(){
	$('#questionsAndAnswers').css('display', 'none');
	$('#memesAndPics').css('display', 'none');
	$('#gameOver').css('display', 'block');
	$('#gameOver').append('<div>GAME OVER</div>');
	$('#gameOver').append('<div>Correct Answers:' + answerCorrect + '</div>');
	$('#gameOver').append('<div>Wrong Answers:' + answerWrong + '</div>');
	$('#gameOver').append('<div>Unanswered:' + noAnswer + '</div>');

}



$(document).on('click', '.answers', function(){
	
	var result = this.dataset.value;
	console.log(result); // <--------- WTF!

	if(result === true){
		
		answerCorrect();
		console.log('yup');
	} else if(result !== true){
		
		answerWrong();
		console.log('nope');
	}
})


