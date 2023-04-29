const qa_data = [
    {
        question: "What kind of animal is the largest living creature on Earth?",
        a: "Elephant",
        b: "Whale",
        c: "Hummingbird",
        d: "Giraffe",
        correctAnswer: "b"
    }, {
        question: "Which insects cannot fly, but can jump higher than 30 cm?",
        a: "Ants",
        b: "Cockroaches",
        c: "Termites",
        d: "Fleas",
        correctAnswer: "d"
    }, {
        question: "After which animals are the Canary Islands named?",
        a: "Dogs",
        b: "Canaries",
        c: "Cats",
        d: "Parrots",
        correctAnswer: "a"
    }, {
        question: "What is the national animal of Canada?",
        a: "Dog",
        b: "Deer",
        c: "Beaver",
        d: "Bear",
        correctAnswer: "c"
    }, {
        question: "	In which city is the oldest zoo in the world?",
        a: "Vienna",
        b: "New York",
        c: "Sidney",
        d: "Moscow",
        correctAnswer: "a"
    }, {
        question: "What do dragonflies prefer to eat?",
        a: "Mosquitoes",
        b: "Ants",
        c: "Blood",
        d: "Nectar",
        correctAnswer: "a"
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