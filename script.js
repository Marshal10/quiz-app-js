const quizContainer=document.getElementById('quiz')
const questionEl=document.getElementById('question')
const answerEls=document.querySelectorAll('.answer')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitBtn=document.getElementById('submit')

const quizData=[
    {
        question:"Question here",
        a:"choice1",
        b:"choice2",
        c:"choice3",
        d:"choice4",
        correct:"d"
    }
]

async function loadQuestions(){
    const res=await fetch('https://opentdb.com/api.php?amount=10&category=18&type=multiple')
    const {results}=await res.json()
    // console.log(results)
    let options=[]
    results.forEach(result=>{
        let tempOptions=[result.correct_answer,...result.incorrect_answers]
        
        console.log(tempOptions)
    })
}

loadQuestions()