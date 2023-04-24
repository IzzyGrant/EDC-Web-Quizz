
const quizData = [
    {
        question: "1. El siguiente texto se refiere al concepto de...",
        a: "hipervinculo",
        b: "hipermedia",
        c: "hipertexto",
        d: "web",
        correct: "c",
        x: "\n \n \
Elementos estructurados formados por textos entrelazados o unidos\n \
entre sí logicamente. \n \
 \n \
 \n \
 \n \
 \n \
        \
        "
    },
    {
        question: "2. El siguiente texto se refiere al concepto de...",
        a: "hipervinculo",
        b: "hipermedia",
        c: "hipertexto",
        d: "web",
        correct: "b",
        x: "\n \n \
Elementos estructurados formados por diversos medios \n \
entrelazados o unidos entre sí logicamente. \n \
En estos hay medios como imagenes, sonidos, graficos, etc... \n \
 \n \
 \n \
 \n \
        \
        "
    },
    {
        question: "3.Las caracteristicas del lenguaje de eetiquetas son: ",
        a: "Texto plano, etiquetas, cortar y pegar",
        b: "las etiquetas y los elementos",
        c: "Cortar, pegar, guardad",
        d: "Texto plano, compacidad, facilidad de procesamiento",
        correct: "d",
        x: ""
    },
    {
        question: "4. Los lenguajes de programación se componen de: ",
        a: "Etiquetas",
        b: "Sintaxis",
        c: "Lineas",
        d: "Frases",
        correct: "b",
        x: ""
    },
    {
        question: "5. Los 3 componentes de la plataforma Java son:",
        a: "JRE, JMV y JDF",
        b: "JDK, JVM y JDR",
        c: "JBM, JPG y JRE",
        d: "JDK, JRE y JVM",
        correct: "d",
        x: ""
    },
    {
        question: "6. El comando para compilar un archivo .java es:",
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