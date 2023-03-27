export const openAndCloseFAQ = () => {
    const buttonsFAQ = document.querySelectorAll(".button-question") 
    
    buttonsFAQ.forEach((buttonFAQ) => (
        buttonFAQ.addEventListener ("click", () => {
            const itemFAQ= buttonFAQ.closest(".faq-item");
            itemFAQ.querySelector(".faq-answer").classList.toggle("active");

            if( buttonFAQ.querySelector(".button-question-image").src.endsWith("plus.svg"))
                {
                    buttonFAQ.querySelector(".button-question-image").src = "./assets/icon/minus.svg";
                }
            else {
                buttonFAQ.querySelector(".button-question-image").src = "./assets/icon/plus.svg";
            }
        })
    ))
}
