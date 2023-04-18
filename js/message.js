export const showMessage = () => {
    const messageCard = document.getElementById('message');

    document.addEventListener("showMessage", (event)  => {
        messageCard.querySelector("#message-content").textContent = event.detail.description;
    })
}