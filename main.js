const form = document.querySelector('#form-main');

function validarValores(campo_A, campo_B) {
    return campo_A > campo_B
}


form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let campo_A = parseFloat(document.querySelector('#campo-A').value.trim());
    let campo_B = parseFloat(document.querySelector('#campo-B').value.trim());

    const campo_A_Style = document.querySelector('#campo-A')

    if (validarValores(campo_A, campo_B)) {
        const mensagemError = '';
        const containerMessageError = document.querySelector('.error-message')
        containerMessageError.innerHTML = mensagemError;
        containerMessageError.style.display = 'none';
        campo_A_Style.style.border = '1px solid green';
    } else {
        const mensagemError = 'Voce precisa digitar um numero maior que o campo abaixo.';
        const containerMessageError = document.querySelector('.error-message')
        containerMessageError.innerHTML = mensagemError;
        containerMessageError.style.display = 'block';
        campo_A_Style.style.border = '1px solid red';
    }


});