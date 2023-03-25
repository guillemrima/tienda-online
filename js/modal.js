export const openModal = () => {
    const modalButtonsOpen = document.querySelectorAll(".button-show-modal");
    const modal = document.querySelector("#modal");

    modalButtonsOpen.forEach((modalButtonOpen) => {
        modalButtonOpen.addEventListener("click", () => {
            modal.classList.add("active")
        })
    })
}

export const closeModal = () => {
    const modal = document.querySelector("#modal"); 
    const modalButtonClose = document.querySelector(".button-close-modal");
    const modalInformation = document.querySelector("#detailsModal");

    modalButtonClose.addEventListener("click",  () => {
        modal.classList.remove("active")
        modalInformation.classList.remove("active")
        modalPart2.classList.remove("fadeIn");
        modalPart1.classList.remove("fadeOut")
        modalPart2.classList.remove("fadeOut");
        modalPart1.classList.remove("fadeIn")
    })
}

export const setCheckoutSectionModal = () => {
    const modalInformation = document.querySelector("#detailsModal");
    const checkoutButton = document.querySelector("#buttonToCheckoutModal")
    const modalPart1 = document.querySelector("#modalPart1");
    const modalPart2 = document.querySelector("#modalPart2");

    checkoutButton.addEventListener("click", () => {
        modalInformation.classList.add("active");
        modalPart2.classList.add("fadeIn");
        modalPart1.classList.add("fadeOut")
        modalPart2.classList.remove("fadeOut");
        modalPart1.classList.remove("fadeIn")
    })
}

export const quitCheckoutSectionModal = () => {
    const modalInformation = document.querySelector("#detailsModal");
    const closeButton = document.querySelector("#buttonToDetailsModal")
    const modalPart1 = document.querySelector("#modalPart1");
    const modalPart2 = document.querySelector("#modalPart2");


    closeButton.addEventListener("click", () => {
        modalInformation.classList.remove("active");
        modalPart2.classList.add("fadeOut");
        modalPart1.classList.add("fadeIn")
        modalPart2.classList.remove("fadeIn");
        modalPart1.classList.remove("fadeOut")
    })
}