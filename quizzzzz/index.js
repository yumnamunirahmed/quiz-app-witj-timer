let currentQuestionIndex = 0;  
let timerValue = 30; 
let timer;  
let quizData = [
    {
        question: "What is the capital of France?",
        options: { A: "Berlin", B: "Madrid", C: "Paris", D: "Rome" },
        correctAnswer: "C"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: { A: "Earth", B: "Mars", C: "Jupiter", D: "Saturn" },
        correctAnswer: "B"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: { A: "Atlantic", B: "Indian", C: "Arctic", D: "Pacific" },
        correctAnswer: "D"
    }
];

function startTimer() {
    timer = setInterval(() => {
        timerValue--;
        document.getElementById('timer').textContent = timerValue;

        if (timerValue <= 0) {
            clearInterval(timer); 
            loadNextQuestion();   
        }
    }, 1000);
}

function loadNextQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const questionData = quizData[currentQuestionIndex];
        document.getElementById('question').textContent = questionData.question;
        const options = document.querySelectorAll('.answer');
        let optionLetters = ['A', 'B', 'C', 'D'];
        optionLetters.forEach((option, index) => {
            options[index].textContent = questionData.options[option];
        });
        timerValue = 30;
        document.getElementById('timer').textContent = timerValue;
        startTimer();

        currentQuestionIndex++;
    } else {
        alert("Quiz Over!");
    }
}
function checkAnswer(selectedAnswer) {
    clearInterval(timer);  
    const currentQuestion = quizData[currentQuestionIndex - 1];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        alert("Correct Answer!");
    } else {
        alert("Wrong Answer! The correct answer was " + currentQuestion.correctAnswer);
    }
    loadNextQuestion();
}
loadNextQuestion();
