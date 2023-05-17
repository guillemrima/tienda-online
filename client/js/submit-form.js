export default (() => {

    const submitButtons = document.querySelectorAll('button[type="submit"]');    submitButtons.forEach(button => { 
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const formElements = button.closest('form').querySelectorAll('input:not([type="submit"]), select, textarea');      
            validateFormData(formElements); 

        })
    })
})();

const validateFormData = (formElements) => {

    const regexList = {
            onlyletters: {
                regex : /^[a-zA-Z]+$/,
                message : "Solo se permiten letras"
            },
            onlynumbers: {
                regex : /^\d+$/,
                message : "Solo se permiten números"
            },
            email : {
                regex : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message : "El formato debe ser: ejemplo@email.com"
            },
            telephone : {
                regex : /^\+?\d{1,3}[-.\s]?\d{3,4}[-.\s]?\d{4}$/,
                message : "El número de móvil no es correto"
            },
            street : {
                regex : /^[\w\d\s]+$/,
                message : "La dirección introducida no es correca"
            }
    }

    for(let i = 0; i < formElements.length; i++) {

        const value = formElements[i].value;
        const formDataSet = formElements[i].dataset.validate;
        const wrongInputDiv = document.createElement("div");
        wrongInputDiv.classList.add("wrong-input-hide")
        const inputContainer = formElements[i].closest("div");

        if ( value.match(regexList[formDataSet].regex) === null) {
            if (!inputContainer.querySelector(".wrong-input")) {
            formElements[i].classList.add("empty")
            wrongInputDiv.classList.add("wrong-input");
            inputContainer.appendChild(wrongInputDiv);
            wrongInputDiv.innerHTML = regexList[formDataSet].message
        }
        }else{
            formElements[i].classList.remove("empty");
            inputContainer.querySelector(".wrong-input-hide").classList.remove("wrong-input")
        }
    }   
}


