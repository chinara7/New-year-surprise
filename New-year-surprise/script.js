const container1 = document.getElementById('container-1')
const container2 = document.getElementById('container-2')
const container3 = document.getElementById('container-3')
const container4 = document.getElementById('container-4')
const container5 = document.getElementById('container-5')
const container6 = document.getElementById('container-6')
const container7 = document.getElementById('container-7')
const container8 = document.getElementById('container-8')

const startBtn = document.getElementById('start-btn')
const title = document.getElementById('title')
const inputSection = document.getElementById('input-section')

const nameInput = document.getElementById('name-input')
const titleName = document.getElementById('name')
const countdown = document.getElementById('countdown')

const submitBtn = document.getElementById('submit-btn')
const resultBtn = document.getElementById('result-btn')

const resultImg0 = document.getElementById('result-0')
const resultImg1 = document.getElementById('result-1')
const resultImg2 = document.getElementById('result-2')
const resultImg3 = document.getElementById('result-3')
const resultImg4 = document.getElementById('result-4')
const resultImg5 = document.getElementById('result-5')

const result0 = document.getElementById('result0')
const result1 = document.getElementById('result1')
const result2 = document.getElementById('result2')
const result3 = document.getElementById('result3')
const result4 = document.getElementById('result4')
const result5 = document.getElementById('result5')

    //*****************************************  QUESTIONS-ANSWERS START   *****************************************//
const question1 = document.getElementById('question-1')
const question2 = document.getElementById('question-2')
const question3 = document.getElementById('question-3')
const question4 = document.getElementById('question-4')
const question5 = document.getElementById('question-5')

const answer11 = document.getElementById('answer11')
const answer12 = document.getElementById('answer12')
const answer13 = document.getElementById('answer13')
const answer14 = document.getElementById('answer14')

const answer21 = document.getElementById('answer21')
const answer22 = document.getElementById('answer22')
const answer23 = document.getElementById('answer23')
const answer24 = document.getElementById('answer24')

const answer31 = document.getElementById('answer31')
const answer32 = document.getElementById('answer32')
const answer33 = document.getElementById('answer33')
const answer34 = document.getElementById('answer34')

const answer41 = document.getElementById('answer41')
const answer42 = document.getElementById('answer42')
const answer43 = document.getElementById('answer43')
const answer44 = document.getElementById('answer44')

const answer51 = document.getElementById('answer51')
const answer52 = document.getElementById('answer52')
const answer53 = document.getElementById('answer53')
const answer54 = document.getElementById('answer54')

const inputAns11 = document.getElementById('ans-11')
const inputAns22 = document.getElementById('ans-22')
const inputAns34 = document.getElementById('ans-34')
const inputAns43 = document.getElementById('ans-43')
const inputAns53 = document.getElementById('ans-53')
    //*****************************************  QUESTIONS-ANSWERS END   *****************************************//

let score = 0
let i = 0

const timer = document.getElementById('timer')
const startingMinuntes = 5
let time = startingMinuntes * 60

async function StartGame() {
    container1.style.visibility = 'hidden'
    container2.style.visibility = 'visible'
    titleName.textContent = nameInput.value

    //*****************************************  TIMER START   *****************************************//
    let interval = setInterval(StartTimer, 1000)

    function StartTimer() {

        let minutes = Math.floor(time / 60)
        let seconds = time % 60

        minutes = minutes < 10 ? `0${minutes}` : minutes
        seconds = seconds < 10 ? `0${seconds}` : seconds
        countdown.innerHTML = `${minutes}:${seconds}`

        time--
        if (minutes == 0 && seconds == 0) {
            clearInterval(interval)
            window.alert("TIME OUT")
            submitBtn.style.visibility = 'hidden'
            submitBtn.replaceWith(resultBtn)
            resultBtn.classList.add('submit-btn')
            resultBtn.style.visibility = 'visible'
            GetScore()
            Result()
        }        
    }
    
    //*****************************************  TIMER END   *****************************************//

    let response = 'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple'
    try {
        const data = await (await fetch(response)).json()
        //console.log(data)

        function GetQuestion() {
            question1.innerHTML = `${i + 1}.  ${data.results[i].question}`
            answer11.innerText = data.results[i].correct_answer
            answer12.innerText = data.results[i].incorrect_answers[1]
            answer13.innerText = data.results[i].incorrect_answers[0]
            answer14.innerText = data.results[i].incorrect_answers[2]
            i++

            question2.innerHTML = `${i + 1}.  ${data.results[i].question}`
            answer21.innerText = data.results[i].incorrect_answers[0]
            answer22.innerText = data.results[i].correct_answer
            answer23.innerText = data.results[i].incorrect_answers[2]
            answer24.innerText = data.results[i].incorrect_answers[1]
            i++

            question3.innerHTML = `${i + 1}.  ${data.results[i].question}`
            answer31.innerText = data.results[i].incorrect_answers[0]
            answer32.innerText = data.results[i].incorrect_answers[1]
            answer33.innerText = data.results[i].incorrect_answers[2]
            answer34.innerText = data.results[i].correct_answer
            i++

            question4.innerHTML = `${i + 1}.  ${data.results[i].question}`
            answer41.innerText = data.results[i].incorrect_answers[0]
            answer42.innerText = data.results[i].incorrect_answers[1]
            answer43.innerText = data.results[i].correct_answer
            answer44.innerText = data.results[i].incorrect_answers[2]
            i++

            question5.innerHTML = `${i + 1}.  ${data.results[i].question}`
            answer51.innerText = data.results[i].incorrect_answers[2]
            answer52.innerText = data.results[i].incorrect_answers[1]
            answer53.innerText = data.results[i].correct_answer
            answer54.innerText = data.results[i].incorrect_answers[0]
        }
        GetQuestion()
    }
    catch {
        console.log('xeta bas verdi')
    }
    //*****************************************  GET SCORE START   *****************************************//
    function GetScore() {
        const inputName1 = document.querySelectorAll('input[name="1answer"]')
        const inputName2 = document.querySelectorAll('input[name="2answer"]')
        const inputName3 = document.querySelectorAll('input[name="3answer"]')
        const inputName4 = document.querySelectorAll('input[name="4answer"]')
        const inputName5 = document.querySelectorAll('input[name="5answer"]')
        submitBtn.style.visibility = 'hidden'
        submitBtn.replaceWith(resultBtn)
        resultBtn.style.visibility = 'visible'
        clearInterval(interval)

        for (const ans11 of inputName1) {
            if (ans11 == document.getElementById('ans-11') && ans11.checked) {
                score++
            }
        }
        for (const ans22 of inputName2) {
            if (ans22 == document.getElementById('ans-22') && ans22.checked) {
                score++
            }
        }
        for (const ans34 of inputName3) {
            if (ans34 == document.getElementById('ans-34') && ans34.checked) {
                score++
            }
        }
        for (const ans43 of inputName4) {
            if (ans43 == document.getElementById('ans-43') && ans43.checked) {
                score++
            }
        }
        for (const ans53 of inputName5) {
            if (ans53 == document.getElementById('ans-53') && ans53.checked) {
                score++
            }
        }
        console.log(score)
    }
    submitBtn.addEventListener('click', GetScore)
    resultBtn.addEventListener('click', Result)
    //*****************************************  GET SCORE END   *****************************************//
}

function Result() {
    resultBtn.style.visibility = 'hidden'
    container2.style.visibility = 'hidden'
    if (score == 0) {
        container3.style.visibility = 'visible'
        container4.style.visibility = 'hidden'
        container5.style.visibility = 'hidden'
        container6.style.visibility = 'hidden'
        container7.style.visibility = 'hidden'
        container8.style.visibility = 'hidden'

        result0.innerText = score
        resultImg0.src = `image/score0.png`
    }
    if (score == 1) {
        container3.style.visibility = 'hidden'
        container4.style.visibility = 'visible'
        container5.style.visibility = 'hidden'
        container6.style.visibility = 'hidden'
        container7.style.visibility = 'hidden'
        container8.style.visibility = 'hidden'

        result1.innerText = score
        resultImg1.src = `image/score1.PNG`
    }
    if (score == 2) {
        container3.style.visibility = 'hidden'
        container4.style.visibility = 'hidden'
        container5.style.visibility = 'visible'
        container6.style.visibility = 'hidden'
        container7.style.visibility = 'hidden'
        container8.style.visibility = 'hidden'

        result2.innerText = score
        resultImg2.src = `image/score2.PNG`
    }
    if (score == 3) {
        container3.style.visibility = 'hidden'
        container4.style.visibility = 'hidden'
        container5.style.visibility = 'hidden'
        container6.style.visibility = 'visible'
        container7.style.visibility = 'hidden'
        container8.style.visibility = 'hidden'

        result3.innerText = score
        resultImg3.src = `image/score3.PNG`
    }
    if (score == 4) {
        container3.style.visibility = 'hidden'
        container4.style.visibility = 'hidden'
        container5.style.visibility = 'hidden'
        container6.style.visibility = 'hidden'
        container7.style.visibility = 'visible'
        container8.style.visibility = 'hidden'

        result4.innerText = score
        resultImg4.src = `image/score4.PNG`
    }
    if (score == 5) {
        container3.style.visibility = 'hidden'
        container4.style.visibility = 'hidden'
        container5.style.visibility = 'hidden'
        container6.style.visibility = 'hidden'
        container7.style.visibility = 'hidden'
        container8.style.visibility = 'visible'

        result5.innerText = score
        resultImg5.src = `image/score5.jpg`
    }
}

//*****************************************BACKGROUND ANIMATION START*****************************************//

setInterval(CreateSnowFlake, 90)

function CreateSnowFlake() {
    const snow_flake = document.createElement('i')
    snow_flake.classList.add('fas', 'fa-snowflake')
    snow_flake.style.left = Math.random() * window.innerWidth + 'px'
    snow_flake.style.animationDuration = Math.random() * 5 + 15 + 's'
    snow_flake.style.opacity = Math.random()
    snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px'

    document.body.appendChild(snow_flake)

    setTimeout(() => snow_flake.remove(), 20000)
}

//*****************************************BACKGROUND ANIMATION END*****************************************//

startBtn.addEventListener('click', StartGame)
