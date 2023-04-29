const qa_data = [
    {
        question: "What is the capital of Canada?",
        a: "Toronto",
        b: "Ottawa",
        c: "Vancuver",
        d: "Montreal",
        correctAnswer: "b"
    }, {
        question: " Which are the official languages of Canada?",
        a: "English and Chinese",
        b: "English and Spanish",
        c: "English and Russian",
        d: "English and French",
        correctAnswer: "d"
    }, {
        question: "Which of the following is not a province of Canada?",
        a: "Rhode Island",
        b: "Alberta",
        c: "Nanavut",
        d: "Ontario",
        correctAnswer: "a"
    }, {
        question: "Which province of Canada has predominantly French population?",
        a: "Nova Scotia",
        b: "British Columbia",
        c: "Quebec",
        d: "Yukon",
        correctAnswer: "c"
    }, {
        question: "Which of the following islands is not a part of Canada?",
        a: "Greenland",
        b: "Baffin Island",
        c: "Victoria Island",
        d: "Prince Edward Island",
        correctAnswer: "a"
    }, {
        question: " Which are the two Houses of Canadian Parliament?",
        a: "Senate and House of Commons",
        b: " Senate and House of Representatives",
        c: " Council of States and House of Peoples",
        d: " House of Lords and House of Commons",
        correctAnswer: "a"
    }, {
        question: "Which country has larger area than Canada?",
        a: "China",
        b: "USA",
        c: "Russia",
        d: "Brazil",
        correctAnswer: "c"
    }, {
        question: "Which is the longest river in Canada?",
        a: "Nelson",
        b: "Fraser",
        c: "St.Lawrence",
        d: "MacKenzie",
        correctAnswer: "d"
    }
];

const quizBlock = document.querySelector(".quizBlock");
const btn = document.querySelector(".btn__check");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const answerRadioEls = document.querySelectorAll(".answer");
const btnBack = document.querySelector(".btn__back");

let currentQuiz = 0;
let score = 0;
loadQuiz()

function loadQuiz() {
    clearPrevAnswer();

    const currentQaData = qa_data[currentQuiz];
    questionElement.innerText = currentQaData.question;
    a_text.innerText = currentQaData.a;
    b_text.innerText = currentQaData.b;
    c_text.innerText = currentQaData.c;
    d_text.innerText = currentQaData.d;
}

function isSelected() {
    let answer = undefined;
    answerRadioEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function clearPrevAnswer() {
    answerRadioEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

btn.addEventListener("click", () => {
    const answer = isSelected();
    if (answer) {
        console.log(answer)
        if (answer === qa_data[currentQuiz].correctAnswer) {
            score++;
            console.log(score)
        }
        currentQuiz++;
        if (currentQuiz < qa_data.length) {
            loadQuiz()
        } else {

            quizBlock.innerHTML = `
                <h2 class="scoreTeller">You answered ${score} from ${qa_data.length} questions.</h2>
                `
            btn.innerText = "Go back!";
            btn.addEventListener("click", () => { location.reload() })
        }
    }
})

btnBack.addEventListener("click", () => {
    setTimeout(function () {
        document.location.assign('../index.html');
    }, 800);
})