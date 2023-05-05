export default (() => {
    const formSelector = document.querySelector('.selector');
    const selectors = formSelector.querySelectorAll("div");

    selectors.forEach(selector => {

        const dataset = selector.dataset.form;
        const event = new CustomEvent('show-form',{detail: dataset});
        
        selector.addEventListener("click", () => {
            
            document.dispatchEvent(event);

            for (let i = 0; i < selectors.length; i++) {
            selectors[i].classList.remove("active");
           }
           selector.classList.add("active")
        })
    })
})();