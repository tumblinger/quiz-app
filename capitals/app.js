const qa_data = [
    {
        question: " If you find yourself in Jakarta, what country are you in?",
        a: "Indonesia",
        b: "Kyrgyzstan",
        c: "New Zealand",
        d: "Malaysia",
        correctAnswer: "a"
    }, {
        question: "Known as the world’s windiest city, what is the capital of New Zealand? ",
        a: "Auckland",
        b: "Kingston",
        c: "Madrid",
        d: "Wellington",
        correctAnswer: "d"
    }, {
        question: "In what capital city would you find the Acropolis?",
        a: "Athens",
        b: "Rome",
        c: "Paris",
        d: "Bern",
        correctAnswer: "a"
    }, {
        question: "Malé is the capital city of which popular island nation?",
        a: "Nauru",
        b: "Micronesia",
        c: "Maldives",
        d: "Singapore",
        correctAnswer: "c"
    }, {
        question: "Bishkek is the capital of which country?",
        a: "Kyrgyzstan",
        b: "Kazakstan",
        c: "Tajikistan",
        d: "Uzbekistan",
        correctAnswer: "a"
    }, {
        question: "Kathmandu is the capital and largest city of which mountainous country? ",
        a: "Vietnam",
        b: "Nepal",
        c: "Bhutan",
        d: "India",
        correctAnswer: "b"
    }, {
        question: "If you are looking at the Mona Lisa, what capital city are you in?    ",
        a: "Vienna",
        b: "Paris",
        c: "Berlin",
        d: "Roma",
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