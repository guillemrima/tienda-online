export const changeAmountValue = () => {
    const amountForm = document.getElementById('amount-product');
    const buttonsAmountForm = amountForm.querySelectorAll('.button-amount');
    const inputAmountForm = amountForm.querySelector('#inputAmount');

    buttonsAmountForm.forEach(button => {
        button.addEventListener('click', () => {
            
            if (button.classList.contains('minus') && inputAmountForm.value > 1) {
                inputAmountForm.value = parseInt(inputAmountForm.value) - 1;
            }
            else if (button.classList.contains('plus')){
                inputAmountForm.value = parseInt(inputAmountForm.value) + 1;
            }
        })
    })

}