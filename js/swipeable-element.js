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

export const sendForm = (() => {
    const form = document.querySelector('#contact-form');
    const submittedForm = document.querySelector('.submitted-form');

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let formData = new FormData(form);
        const res = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
        }
        console.log(res);
        form.classList.add('submitted');
        submittedForm.classList.add('active');
    })
        
})