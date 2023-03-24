export const openModal = () => {
    const modalButtonsOpen = document.querySelectorAll(".button-show-modal");
    const modalCheckout = document.querySelector("#checkout");

    modalButtonsOpen.forEach((modalButtonOpen) => {
        modalButtonOpen.addEventListener("click", () => {
            modalCheckout.classList.add("active")
            console.log("Prueba modal_1");
        })
    })
}

export const closeModal = () => {
    const modalCheckout = document.querySelector("#checkout"); 
    const modalButtonClose = document.querySelector(".button-close-modal");

    modalButtonClose.addEventListener("click",  () => {
        modalCheckout.classList.remove("active")
        console.log("Prueba modal_2");
    })
}