export const changeAmountValue = () => {
    const amountForm = document.getElementById('amount-product');
    const buttonsAmountForm = amountForm.querySelectorAll('.button-amount');
    const inputAmountForm = amountForm.querySelector('#inputAmount');

    buttonsAmountForm.forEach(button => {
        button.addEventListener('click', () => {
            
            if (button.classList.contains('minus') && inputAmountForm.value > 1) {
                inputAmountForm.value = parseInt(inputAmountForm.value) - 1;

                document.dispatchEvent(new CustomEvent("showMessage",{
                    detail: {
                        description : "¡Producto descartado correctamente!",
                        image : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0L8 4H10V8H14V4H16M1 2V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z" /></svg>'
                    }
                
                }))
            }
            else if (button.classList.contains('plus')){
                inputAmountForm.value = parseInt(inputAmountForm.value) + 1;

                document.dispatchEvent(new CustomEvent("showMessage",{
                    detail: {
                        description : "¡Producto añadido correctamente!",
                        image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 0V4H8L12 8L16 4H14V0M1 2V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z" /></svg>'
                    }
                }))
            }   
        })
    })
}