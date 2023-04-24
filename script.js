
const quizData = [
    {
        question: "1. Java es un lenguaje de programación...?",
        a: "binario",
        b: "de Nivel Medio",
        c: "de Alto nivel",
        d: "de Bajo Nivel",
        correct: "c",
        x: "\n \n \
int x = 0;                             \n \
int y = 0;                  A)sdfsdfsdf\n \
while (x<5) {               B)         \n \
y +=x;                      C)         \n \
x++;                        D)         \n \
System.out.println(y);                 \n \
        \
        "
    },
    {
        question: "2. Fue quien lanzó el lenguaje de programación Java en 1995",
        a: "Sun Microsystems",
        b: "Microsoft",
        c: "Apple",
        d: "UNIX",
        correct: "a",
        x: ""
    },
    {
        question: "3. Los lenguajes de programación se componen de: ",
        a: "Etiquetas",
        b: "Sintaxis",
        c: "Lineas",
        d: "Frases",
        correct: "b",
        x: ""
    },
    {
        question: "4. Los 3 componentes de la plataforma Java son:",
        a: "JRE, JMV y JDF",
        b: "JDK, JVM y JDR",
        c: "JBM, JPG y JRE",
        d: "JDK, JRE y JVM",
        correct: "d",
        x: ""
    },
    {
        question: "5. El comando para compilar un archivo .java es:",
        a: "compile-java",
        b: "compjava",
        c: "cjava",
        d: "javac",
        correct: "d",
        x: ""
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const code = document.getElementById('xcode')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    code.innerText = currentQuizData.x
    if (code == undefined){ code.innerText = ""}
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        } else { /*window.alert("Incorrecto :(");*/ }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Respondiste ${score} de ${quizData.length} preguntas correctamente!</h2>

                <button onclick="location.reload()">Recargar</button>
            `
        }
    }
})