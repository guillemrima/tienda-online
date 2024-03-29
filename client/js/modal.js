export const openModal = () => {
    const modalButtonsOpen = document.querySelectorAll(".button-show-modal");
    const modal = document.querySelector("#modal");

    modalButtonsOpen.forEach((modalButtonOpen) => {
        modalButtonOpen.addEventListener("click", () => {
            modal.classList.add("active")
            modalButtonOpen.closest("body").classList.add("blocked")
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
        modalPart1.classList.remove("fadeOut")
        modalButtonClose.closest("body").classList.remove("blocked")
    })
}

export const setCheckoutSectionModal = () => {
    const modalInformation = document.querySelector("#detailsModal");
    const checkoutButton = document.querySelector("#buttonToCheckoutModal")
    const modalPart1 = document.querySelector("#modalPart1");
    const modalPart2 = document.querySelector("#modalPart2");

    checkoutButton.addEventListener("click", () => {
        modalInformation.classList.add("active");
        modalPart1.classList.add("fadeOut");
        modalPart1.classList .remove("fadeIn")
        modalPart2.classList.add("fadeIn");
        modalPart2.classList .remove("fadeOut")
    })
}

export const quitCheckoutSectionModal = () => {
    const modalInformation = document.querySelector("#detailsModal");
    const closeButton = document.querySelector("#buttonToDetailsModal")
    const modalPart1 = document.querySelector("#modalPart1");
    const modalPart2 = document.querySelector("#modalPart2");


    closeButton.addEventListener("click", () => {
        modalInformation.classList.remove("active");
        modalPart1.classList.add("fadeIn");
        modalPart1.classList.remove("fadeOut");
        modalPart2.classList.add("fadeOut");
        modalPart2.classList.remove("fadeIn");
    })
}

export const setModalTabDescription = () => {
    const tabModal = document.querySelector("#tabModal");
    
    const tabs = tabModal.querySelectorAll(".tab");
    const tabContents = tabModal.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            for(let i = 0; i < tabs.length; i++){
                tabs[i].classList.remove("active");
            }
            tab.classList.add("active");
            
            for (let i = 0; i < tabContents.length; i++) {
                if(tabContents[i].classList.contains("active")) {
                    tabContents[i].classList.remove("active");

                }
                if(tab.dataset.tab === tabContents[i].dataset.tab) {
                    tabContents[i].classList.add("active");
                }
            }
        })
    })
}