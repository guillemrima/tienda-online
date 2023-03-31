export const openAndCloseFAQ = () => {
    const buttonsFAQ = document.querySelectorAll(".button-question") 
    
    buttonsFAQ.forEach((buttonFAQ) => (
        buttonFAQ.addEventListener ("click", () => {
            const itemFAQ = buttonFAQ.closest(".faq-item");
            itemFAQ.querySelector(".faq-answer").classList.toggle("active");
            buttonFAQ.classList.toggle("active");
        })
    ))
}
