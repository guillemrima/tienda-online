export const openAndCloseHamburger = () => {
    const buttonsHamburger = document.querySelectorAll('.contracted-card-container');

    buttonsHamburger.forEach(buttonHamburguer => {
        buttonHamburguer.addEventListener('click', () => {
            const hamburgerParent = buttonHamburguer.closest(".expand-card-container")
            hamburgerParent.querySelector(".expanded-card-container").classList.toggle("active");
            buttonHamburguer.classList.toggle("active");

        })
    })
}
