export const countInputCharacters =  () => {

    const inputContainerList = document.querySelectorAll('.limited-input');
    
    inputContainerList.forEach(inputContainer => {
        const input = inputContainer.querySelector('input');
        const counter = inputContainer.querySelector('.input-counter');
        input.addEventListener('input', () => {
            input.value.length > 20 ? (input.value = input.value.slice(0, 20),counter.querySelector(".counter").classList.add("limit")) 
            : 
            (counter.querySelector(".counter").innerHTML = input.value.length,counter.querySelector(".counter").classList.remove("limit"));
        })
    })

}