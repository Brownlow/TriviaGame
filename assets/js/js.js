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
		"rightAnswerImage": "https://media.giphy.com/media/knXVxRDG8SP1C/giphy.gif",
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

var intervalId ;
var correctAnswers = 0;
var wrongAnswers = 0;
var noAnswer = 0;
var stopwatch ;
var qCounter = 0;
var answer;
var qAndA;
var time = 5;



// Start Button Initializes Game ---------------------------------------

$('#start-button').on('click', function(){
	startGame();
})

// Timer Functions -------------------------------------------------------

function startCount() {
  intervalId = setInterval(countDown, 1000);
}

function stopCount() {

  console.log("stopping");
  clearInterval(intervalId);

}

function resetCount(){
	time = 5;
}

function countDown(){

// Decrement stopwatch time
time --;

// Display stopwatch in the dom
$('#countDown').html(time);


	if(time === 0){

		clearInterval(intervalId);
		$('#questionsAndAnswers').css('display', 'none');
		$('#memesAndPics').css('display', 'block');
		$('#memesAndPics').append('<img id="timesUp">');
		$('#timesUp').attr('src', questions[qCounter].wrongAnswerImage);
		$('#memesAndPics').append('<div class="memeMessage">');
		$('.memeMessage').text('CORRECT ANSWER: ' + questions[qCounter].answers.answer);

		// Increment Question Counter
		qCounter++;
	
		// Hide previous question
		$('.' + questions[qCounter - 1].title).css('display','none');
	
		// Increment unansweredquestions
		noAnswer++;
	
		// Delay screen on 
		setTimeout(startGame, 3000);

		resetCount();

		if (qCounter === questions.length){
			console.log('last question')
			gameOver();
		}
	}
}


function timeDelay(){

	// Delay screen on 
    setTimeout(startGame, 1000);
}

// Start Game -----------------------------------------

function startGame(){

	// Hide visible memes
	$('#memesAndPics').css('display', 'none');

	// remove start game button
	$('#start-button').css('display', 'none');

	// Show questions and answers
	$('#questionsAndAnswers').css('display', 'block');

	/// Load Question
	buildQuestion();

}

// Build Questions -----------------------------------------

function buildQuestion(){

	// Show timer and start
	startCount();

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

// Answer Questions ---------------------------------------------------------

// Click to choose answer
$(document).on('click', '.answers', function(){
	
	var result = this.dataset.value;
	console.log(result); 

	if(result === 'true'){
		
		answerCorrect();
		console.log('right answer');

	} else {
		
		answerWrong();
		console.log('wrong answer');

		clearInterval(intervalId);
		$('#countDown').html(' ');

	}
})

function answerCorrect(){

	stopCount();

	$('#questionsAndAnswers').css('display', 'none');
 	$('#memesAndPics').css('display', 'block');
 	var memes = $('<img id="timesUp">');
 	$('#memesAndPics').append(memes);
	memes.attr('src', questions[qCounter].rightAnswerImage);
 	$('#memesAndPics').html('CORRECT ANSWER');
 	

 	correctAnswers++;

 	// Increment Question Counter
	qCounter++;

	// Hide previous question
	$('.' + questions[qCounter - 1].title).css('display','none');

	// Delay screen on 
	setTimeout(startGame, 3000);

	isGameOver();

	resetCount();

}

function answerWrong(){

	stopCount();
	
	$('#questionsAndAnswers').css('display', 'none');
	$('#memesAndPics').css('display', 'block');
	var answerImage = $('<img>');
	$('#memesAndPics').append(answerImage);
	answerImage.attr('src', questions[qCounter].wrongAnswerImage);
	$('#memesAndPics').html('WRONG ANSWER');

	wrongAnswers++;

	// Increment Question Counter
	qCounter++;

	// Hide previous question
	$('.' + questions[qCounter - 1].title).css('display','none');

	// Delay screen on 
	setTimeout(startGame, 3000);

	isGameOver();

	resetCount();

}


// Game Over --------------------------------------------------------


function isGameOver(){

	// End game when counter gets through all questions
		if (qCounter === questions.length){
			console.log('last question')
			gameOver();
		}
}


function gameOver(){
	$('#questionsAndAnswers').css('display', 'none');
	$('#memesAndPics').css('display', 'none');
	$('#countDown').css('display', 'none');
	$('#gameOver').css('display', 'block');
	$('#gameOver').append('<div>GAME OVER</div>');
	$('#gameOver').append('<div>Correct Answers:' + correctAnswers + '</div>');
	$('#gameOver').append('<div>Wrong Answers:' + wrongAnswers + '</div>');
	$('#gameOver').append('<div>Unanswered:' + noAnswer + '</div>');

	stopCount();

}






