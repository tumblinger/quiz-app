const qa_data = [
    {
        question: "Who created JavaScript language?",
        a: "Douglas Crockford",
        b: "Brendan Eich",
        c: "James Gosling",
        d: "Ryan Dahl",
        correctAnswer: "b"
    }, {
        question: "What is JavaScript?",
        a: "Language that follows ECMAScript standard",
        b: "Client-side scripting language (web browsers)",
        c: "All these",
        d: "Server-side scripting language",
        correctAnswer: "c"
    }, {
        question: "Inside what HTML tag you would put JavaScript code?",
        a: "<js>",
        b: "<scripting>",
        c: "<script>",
        d: "<javascript>",
        correctAnswer: "c"
    }, {
        question: "What is the correct syntax to use an external script called “new.js”?",
        a: "<script src='new.js'>",
        b: "<script name='new.js'>",
        c: "script href='new.js'>",
        d: "script content='new.js'>",
        correctAnswer: "a"
    }, {
        question: "When we don't assign a value to a variable it will be?",
        a: "null",
        b: "undefined",
        c: "''",
        d: "NaN",
        correctAnswer: "b"
    }, {
        question: "var x = 3 + 4 + '7'",
        a: "14",
        b: "'77'",
        c: "'347'",
        d: "77",
        correctAnswer: "b"
    }
];

const quizBlock = document.querySelector(".quizBlock");
const btn = document.querySelector(".btn__check");
const btnBack = document.querySelector(".btn__back");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const answerRadioEls = document.querySelectorAll(".answer");

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