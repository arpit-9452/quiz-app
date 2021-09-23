const quizDB = [
    {
        qustion: "Q1: What is the full name of HTTPS?",
        a: "Hypertool Tramsept Protocol Secure",
        b: "Hypertext Transformation Protocol Syntax",
        c: "Hypertext Transfer Protocol Security",
        d: "Hypertext Transfer Protocol Secure",
        ans: "ans4"
    },
    {
        qustion: "Q1: What is the full name of SATA?",
        a: "Serial advanced technology attachment",
        b: "Serial advanced term attand",
        c: "Serial adopted technology attachment",
        d: "Service advanced technology attachment",
        ans: "ans1"
    },
    {
        qustion: "Q1: What is the full name of HTTP?",
        a: "Hyper Text Transform Product",
        b: "Hyper Text Test Protocall",
        c: "Hyper Text Transfer Polite",
        d: "Hyper Text Transfer Protocall",
        ans: "ans4"
    },
    {
        qustion: "Q1: What is the full name of JS?",
        a: "JavaScript",
        b: "JavaSuperscript",
        c: "JoeScript",
        d: "JsonScript",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore')

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];
    question.innerText = questionList.qustion;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion()

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = ()=> {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length) {
        loadQuestion();
    }else {
        showScore.innerHTML = `
        <h3> You score is ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()">Play Again</button> 
        `;

        showScore.classList.remove('scoreArea')
    }
});