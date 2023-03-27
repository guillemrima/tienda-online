export const openAndCloseHambgurger = () => {
    const buttonsHamburger = document.querySelectorAll('.contracted-card-container');

    buttonsHamburger.forEach(buttonHamburguer => {
        buttonHamburguer.addEventListener('click', () => {
            const hamburgerParent = buttonHamburguer.closest(".expand-card-container")
            hamburgerParent.querySelector(".expanded-card-container").classList.toggle("active");
                console.log(hamburgerParent)
            if( hamburgerParent.querySelector(".contracted-card-container").querySelector("img").src.endsWith("menu.svg"))
            {
                hamburgerParent.querySelector(".contracted-card-container").querySelector("img").src = "./assets/icon/close.svg";
            }
        else {
            hamburgerParent.querySelector(".contracted-card-container").querySelector("img").src = "./assets/icon/menu.svg";
        }
        })
    })
}