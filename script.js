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

let currentQuestion = 0;
let score = 0;

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
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const answer1 = quizData[currentQuestion].answer1;
    const answer2 = quizData[currentQuestion].answer2;
    const answer3 = quizData[currentQuestion].answer3;
    const answer4 = quizData[currentQuestion].answer4;

    if (selectedButton.innerText === answer1) {
        score += 15;
    }
    if (selectedButton.innerText === answer2) {
        score += 10;
    }
    if (selectedButton.innerText === answer3) {
        score += 5;
    }
    if (selectedButton.innerText === answer4) {
        score += 0;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length * 15}</p>
    `;
}

showQuestion();