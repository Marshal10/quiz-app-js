const quizContainer=document.getElementById('quiz')
const questionEl=document.getElementById('question')
const answerEls=document.querySelectorAll('.answer')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitBtn=document.getElementById('submit')


let quizData=[]
let currentQuiz=0
let score=0

function loadQuiz(){
    deselectAnswers()
    const currentQuizData=quizData[currentQuiz]
    console.log(currentQuizData)

    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d

}

function deselectAnswers(){
    answerEls.forEach(el=>{
        el.checked=false
    })
}

async function loadQuestions(){
    const res=await fetch('https://opentdb.com/api.php?amount=10&category=18&type=multiple')
    const {results}=await res.json()
    results.forEach(result=>{
        let tempOptions=[result.correct_answer,...result.incorrect_answers]
        let question_text=result.question
        let correct_ans=result.correct_answer
        shuffle(tempOptions)
        quizData.push({
            question:question_text,
            a:tempOptions[0],
            b:tempOptions[1],
            c:tempOptions[2],
            d:tempOptions[3],
            correct:correct_ans
        })
    })
    loadQuiz()
}

function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }



loadQuestions()