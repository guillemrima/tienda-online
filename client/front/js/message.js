export const showMessage = () => {
    const messageCard = document.getElementById('message');

    document.addEventListener("showMessage", (event)  => {
        messageCard.querySelector("#message-content").textContent = event.detail.description;
        messageCard.querySelector("#message-image").innerHTML = event.detail.image
        messageCard.classList.add('active');
        setTimeout(() => {
            message.classList.remove("active");
        }, 1000);
    })
}