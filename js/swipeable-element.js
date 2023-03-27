export const flipCardToFront =  (()=> {
    const  flipCardButton = document.querySelector('.flip-card-front-button');
    const card = document.querySelector('.card-contact-container');
    flipCardButton.addEventListener("click", () => {
       card.classList.add('active');
    })
});

export const flipCardToBack =  (()=> {
    const  flipCardButton = document.querySelector('.flip-card-back-button');
    const card = document.querySelector('.card-contact-container');
    flipCardButton.addEventListener("click", () => {
       card.classList.remove('active');
    })
});