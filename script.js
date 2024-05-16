const quizData = [
    {
        question: "how often have you felt sad in the past 2 weeks?",
        options: ["a few times", "not at all", "a lot", "most of the time"],
        answer1: "most of the time",
        answer2: "a lot",
        answer3: "a few times",
        answer4: "not at all"
    },
    {
        question: "have you lost interrest in things you used to like, hobbies for example?",
        options: ["not at all", "a few", "yes, most if not all", "a lot but not all"],
        answer1: "yes, most if not all",
        answer2: "a lot but not all",
        answer3: "a few",
        answer4: "not at all"
    },
    {
        question: "do you often have a hard time sleeping (even if you may be tired)?",
        options: ["yes always", "no i sleep pretty well", "sometimes", "a lot but not always"],
        answer1: "yes always",
        answer2: "a lot but not always",
        answer3: "sometimes",
        answer4: "no i sleep pretty well"
    },
    {
        question: "do you feel tired a lot?",
        options: ["no i feel very energetic most the time", "yes im always tired", "if i slept bad", "a lot but not always"],
        answer1: "yes im always tired",
        answer2: "a lot but not always",
        answer3: "if i slept bad",
        answer4: "no i feel very energetic most the time"
    },
    {
        question: "do you feel worthless when it comes to a lot of things in your life (like your projects/achievement)?",
        options: ["yes a lot, but not everything", "some things but not all", "no i do not", "i feel worthless about everything"],
        answer1: "i feel worthless about everything",
        answer2: "yes a lot, but not everything",
        answer3: "some things but not all",
        answer4: "no i do not"
    },
    {
        question: "do you avoid talking to people, even if you might want to?",
        options: ["yes i avoid everyone", "no/not really", "a lot of people but not everyone", "i avoid them only when i feel sad"],
        answer1: "yes i avoid everyone",
        answer2: "a lot of people but not everyone",
        answer3: "i avoid them only when i feel sad",
        answer4: "no/not really"
    },
    // Add more questions here, if need be.
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

    if ((100 / (quizData.length * 15) * finalScore) < 40) {
        document.getElementById('quiz').innerHTML = `
        <h1>you are done with the test :)</h1>
        <p>you feel happy most the time, if not all the time<p>
        `
    }
    else if ((100 / (quizData.length * 15) * finalScore) > 60) {
        document.getElementById('quiz').innerHTML = `
        <h1>you are done with the test :)</h1>
        <p>you don't feel happy most the time, you should probably talk to someone<p>
        `
    } else {
        document.getElementById('quiz').innerHTML = `
        <h1>you are done with the test :)</h1>
        <p>you feel ok, maybe not always happy but also not always sad, good enough<p>
        `
    }
    //<p>Your score: ${finalScore}/${quizData.length * 15}</p>
    ;
}

showQuestion();
