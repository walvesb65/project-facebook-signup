const button = document.getElementById('button-login');
function alertaButton() {
  const referencia = document.getElementById('user-email-phone').value;
  alert(referencia);
}
button.addEventListener('click', alertaButton);

/* Validar se todos os campos foram preenchidos ao clicar no botão Cadastre-se */
const rightInp = document.querySelectorAll('.right-content input[type="text"]');
const passInp = document.querySelector('.right-content input[type="password"]');
const divRadio = document.querySelectorAll('#buttons input[type="radio"]');

function validacaoentradas() {
  let resultTrue = true;
  const resultFalse = false;
  for (let index = 0; index < rightInp.length; index += 1) {
    if ((rightInp[index].value && passInp.value) === '') {
      resultTrue = resultFalse;
    }
  }
  return resultTrue;
}

function validateRadios() {
  const resultTrue = true;
  let resultFalse = false;
  for (let index = 0; index < divRadio.length; index += 1) {
    if (divRadio[index].checked) {
      resultFalse = resultFalse || resultTrue;
    }
  }
  return resultFalse;
}

const buttonRegister = document.getElementById('facebook-register');
