const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Madrid", "Rome", "Berlin"],
        answer1: "Paris",
        answer2: "Madrid",
        answer3: "Rome",
        answer4: "Berlin"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Mars", "Earth"],
        answer1: "Jupiter",
        answer2: "Saturn",
        answer3: "Mars",
        answer4: "Earth"
    },
    // Add more questions here...
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const previousQuestionElement = document.getElementById("previous-question");

const previousQuestionLabel = "previous question";
let currentQuestion = 0;
const score = new Array(quizData.length).fill(0);

function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });

    previousQuestionElement.innerHTML = "";
    if (currentQuestion > 0) {
        const button = document.createElement("button");
        button.innerText = previousQuestionLabel;
        previousQuestionElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const question = quizData[currentQuestion];

    if (selectedButton.innerText === previousQuestionLabel) {
        currentQuestion--;
        showQuestion();
        return;
    }

    if (selectedButton.innerText === question.answer1) {
        score[currentQuestion] = 15;
    } else if (selectedButton.innerText === question.answer2) {
        score[currentQuestion] = 10;
    } else if (selectedButton.innerText === question.answer3) {
        score[currentQuestion] = 5;
    } else if (selectedButton.innerText === question.answer4) {
        score[currentQuestion] = 0;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let finalScore = 0;

    score.forEach((score) => {
        finalScore += score;
    });

    document.getElementById('quiz').innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${finalScore}/${quizData.length * 15}</p>
    `;
}

showQuestion();
