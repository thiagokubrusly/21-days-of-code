let myQuestions = [
	{
		question: "HTML é uma linguagem de programação?",
		answers: {
			a: 'Não, é uma linguagem de marcação. <br>',
			b: 'Não, é uma linguagem de estilização. <br>',
			c: 'Sim, é uma linguagem de programação. <br>',
            d: 'Não é uma linguagem. <br>'
		},
		correctAnswer: 'a'
	},
	{
		question: "CSS é uma linguagem de programação?",
		answers: {
			a: 'Não, é uma linguagem de marcação. <br>',
			b: 'Não, é uma linguagem de estilização. <br>',
			c: 'Sim, é uma linguagem de programação. <br>',
			d: 'Não é uma linguagem. <br>'
		},
		correctAnswer: 'b'
	},
	{
		question: "Javascript é uma linguagem de programação?",
		answers: {
			a: 'Não, é uma linguagem de marcação. <br>',
			b: 'Não, é uma linguagem de estilização. <br>',
			c: 'Sim, uma linguagem de programação. <br>',
			d: 'Não é uma linguagem. <br>'
		},
		correctAnswer: 'c'
	}
];

let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){

        let output = [];
		let answers; 

		
		for(let i=0; i<questions.length; i++){
			
			answers = [];

			for(letter in questions[i].answers){

				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'

                        + questions[i].answers[letter]
					+ '</label>'
				);
			}

			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		quizContainer.innerHTML = output.join('');
	}

	function showResults(questions, quizContainer, resultsContainer){
		
		let answerContainers = quizContainer.querySelectorAll('.answers');
		
		let userAnswer = '';
		let numCorrect = 0;
		
		for(let i=0; i<questions.length; i++){

			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
						
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'lightgreen';
			}else{
				
				answerContainers[i].style.color = 'red';
			}
		}
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}

	showQuestions(questions, quizContainer);

	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
