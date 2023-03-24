//SECTION FAQ FUNCTIONALITY
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




//SECTION MODAL FUNCTIONALITY
const checkoutButtonHeader = document.getElementById("checkoutButtonHeader");
const checkoutButtonSlider = document.getElementById("checkoutButtonSlider");
const checkoutButtonCheckoutBox = document.getElementById("checkoutButtonCheckoutBox")
const checkoutBox = document.getElementById("checkout")
const closeCheckoutBox = document.getElementById("closeButton")
const detailsCheckout = document.getElementById("detailsCheckout")
const backButtonCheckoutPart2 = document.getElementById("backButtonCheckoutPart2")
const checkoutPart1 = document.getElementById("checkoutPart1")
const checkoutPart2 = document.getElementById("checkoutPart2")
function showCheckoutBox() {
    checkoutBox.style.display = "flex"
    checkoutBox.style.animation = "fadeIn 0.2s ease-in"
    checkoutBox.style.zIndex = "999"
    detailsCheckout.style.left = "50%"
    checkoutPart1.style.animation = ""
    checkoutPart2.style.animation = ""
    console.log("hola")
}
function hideCheckoutButton() {
    checkoutBox.style.display = "none"
    checkoutBox.style.zIndex = "-999"
    detailsCheckout.style.animation = ""
}
function showCheckoutPart1() {
    detailsCheckout.style.left = "50%"
    detailsCheckout.style.animation = "fadeCheckoutPart2 0.7s ease-in-out forwards"
    checkoutPart1.style.animation = "fadeIn 0.5s ease-in"
    checkoutPart2.style.animation = "fadeOut 0.5s ease-in forwards"

}
function showCheckoutPart2() {
    detailsCheckout.style.left = "0%"
    detailsCheckout.style.animation = "fadeCheckoutPart1 0.7s ease-in-out forwards"
    checkoutPart2.style.animation = "fadeIn 0.5s ease-in"
    checkoutPart1.style.animation = "fadeOut 0.5s ease-in forwards"
}
checkoutButtonHeader.addEventListener("click", showCheckoutBox)
checkoutButtonSlider.addEventListener("click", showCheckoutBox)
checkoutButtonCheckoutBox.addEventListener("click", showCheckoutPart2)
backButtonCheckoutPart2.addEventListener("click", showCheckoutPart1)
closeCheckoutBox.addEventListener("click", hideCheckoutButton)






//SECTION CONTACT FUNCTIONALITY
const buttonFront = document.getElementById("buttonFront")
const frontContact = document.getElementById("frontContact")
const backContact = document.getElementById("backContact")
const buttonBack = document.getElementById("buttonBack")
function flipCardBack() {
    frontContact.style.transform ="perspective(1000px) rotateY(180deg)"
    backContact.style.transform = "perspective(1000px) rotateY(360deg)"
}
function flipCardFront() {
    frontContact.style.transform ="perspective(1000px) rotateY(0deg)"
    backContact.style.transform = "perspective(1000px) rotateY(180deg)"
}
buttonFront.addEventListener("click", flipCardBack)
buttonBack.addEventListener("click", flipCardFront)





