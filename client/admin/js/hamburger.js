export default (() => {
    const  hamburgerButton = document.querySelector(".hamburger-button");
    
    hamburgerButton.addEventListener("click", () => {
       hamburgerButton.classList.toggle("active");
    })
})()