const questions = [
    {
        question: "What is the capital of France?",
        answers:[
            {text: "Berlin", correct: false},
            {text: "Madrid", correct: false},
            {text: "Paris", correct: true},
            {text: "Rome", correct: false}
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers:[
            {text: "Earth", correct: false},
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Saturn", correct: false}
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers:[
            {text: "Harper Lee", correct: true},
            {text: "Mark Twain", correct: false},
            {text: "F. Scott Fitzgerald", correct: false},
            {text: "Ernest Hemingway", correct: false}
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers:[
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Arctic Ocean", correct: false},
            {text: "Pacific Ocean", correct: true}
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers:[
            {text: "Ag", correct: false},
            {text: "Au", correct: true},
            {text: "Gd", correct: false},
            {text: "Pb", correct: false}
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers:[
            {text: "Leonardo da Vinci", correct: true},
            {text: "Vincent van Gogh", correct: false},
            {text: "Pablo Picasso", correct: false},
            {text: "Claude Monet", correct: false}
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers:[
            {text: "0", correct: false},
            {text: "1", correct: false},
            {text: "2", correct: true},
            {text: "3", correct: false}
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answers:[
            {text: "1910", correct: false},
            {text: "1912", correct: true},
            {text: "1914", correct: false},
            {text: "1916", correct: false}
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers:[
            {text: "Gold", correct: false},
            {text: "Iron", correct: false},
            {text: "Diamond", correct: true},
            {text: "Silver", correct: false}
        ]
    },
    {
        question: "Who is known as the Father of Computers?",
        answers:[
            {text: "Charles Babbage", correct: true},
            {text: "Alan Turing", correct: false},
            {text: "John von Neumann", correct: false},
            {text: "Steve Jobs", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo+". "+currentQuestion.question;
    answerButtons.innerHTML = "";

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.style.userSelect = "none";
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else {
        showScore();
    }
}



nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz()
    }
});


startQuiz();