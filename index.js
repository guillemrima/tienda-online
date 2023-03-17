const buttonsQuestion = document.querySelectorAll(".button-question")
const answerFAQ = document.querySelectorAll(".faq-answer")
const featuredSection = document.getElementById("featured")
const detailsSection = document.getElementById("details")
const faqSection = document.getElementById("faq")
const teamSection = document.getElementById("team")
const contactSection = document.getElementById("contact")
const footerSection = document.getElementById("footer")

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

function showSection() {
    if(window.scrollY > 600 && window.scrollY < 1000){
    featuredSection.style.animation = "fadeIn 1s ease-in forwards"}
    else if(window.scrollY > 1000){
        detailsSection.style.animation = "fadeIn 1s ease-in forwards"}
}

window.addEventListener("scroll", showSection)