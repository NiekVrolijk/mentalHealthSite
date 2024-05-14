
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('containerTest')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffedQuestions, currectQuestionIndex;
let quizScore = 0;




function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
    {
        question: 'which one huub fucking with?',
        answers: [
            { text: 'girl', correct: false },
            { text: 'boy', correct: false },
            { text: 'dog', correct: correct },
            { text: 'corpse', correct: false }
        ]
    },
    {
        question: 'has anybody ever loved huub?',
        answers: [
            { text: 'yes', correct: false },
            { text: 'no', correct: false },
            { text: 'the dog', correct: correct },
            { text: 'he himself', correct: false }
        ]
    }
]