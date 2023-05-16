export default (() => {
    const formParent = document.querySelector(".form-container");
    const forms = formParent.querySelectorAll(".form");
    const submitForm = document.querySelector("#submitButton");
    const resetForm = document.querySelector("#resetButton");

    document.addEventListener("show-form", (event) => {
        const datasetForm = event.detail;

        forms.forEach(form => {
            form.dataset.form == datasetForm ? form.classList.add("active") : form.classList.remove("active");
        })

    })

    resetForm.addEventListener("click",() => {
        forms.forEach(form => { 
            form.querySelector("form").reset();
        })
    })

    submitForm.addEventListener("click",() => {
        forms.forEach(form => {
            const formulario = form.querySelector("form");  
            console.log(formulario)
        });
    })
})();
