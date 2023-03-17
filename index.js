const buttonsQuestion = document.querySelectorAll(".button-question")
const answerFAQ = document.querySelectorAll(".faq-answer")

function showAnswer(event) {
    for (let i = 0; i < answerFAQ.length; i++){
        if (buttonsQuestion[i].getAttribute("value") === "false") {
         
            if(answerFAQ[i].getAttribute("name") === event.target.name) {
            answerFAQ[i].style.display = "flex"
            answerFAQ[i].style.animation = "fadeIn  0.5s ease-in"
            buttonsQuestion[i].setAttribute("value", "true")
            event.target.setAttribute("src", "http://127.0.0.1:5500/tienda-online/assets/icon/minus.svg")
        } 
        }
        else {
            if(answerFAQ[i].getAttribute("name") === event.target.name) {
                answerFAQ[i].style.display = "none"
                buttonsQuestion[i].setAttribute("value", "false")
                event.target.setAttribute("src", "http://127.0.0.1:5500/tienda-online/assets/icon/plus.svg")
        }
    }
    }
}


buttonsQuestion.forEach(buttonQuestion => {
    buttonQuestion.addEventListener("click", showAnswer)
})

// ES UN POCO CUTRILLO PERO FUNCIONA