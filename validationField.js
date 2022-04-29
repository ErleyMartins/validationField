/// *************************************************** ///
/// *************** AUXILIO PARA DESENVOLVER*************** ///
/// *** GITHUB https://github.com/ErleyMartins ******** ///
/// *************************************************** ///

const _validationField = {
    validationInput: (input, min, max, nameField) => {
        const id = input.getAttribute('id');
        const div = document.querySelector(`div#${id}`);
        
        if (input.value === '' || input.value == null) {
            input.classList.add('is-invalid');
            div.innerHTML = `O campo ${nameField} e obrigatorio.`;
            return false;
        }
        else if (input.value.length < min) {
            input.classList.add('is-invalid');
            div.innerHTML = `O campo ${nameField} deve ter no minimo ${min} caracteres.`;
            return false;
        }
        else if (input.value.length > max) {
            input.classList.add('is-invalid');
            div.innerHTML = `O campo ${nameField} deve ter no maximo ${max} caracteres.`;
            return false;
        }

        div.innerHTML = '';
        input.classList.remove('is-invalid');
        
        return true;
    },
    validationSelect: (select, defaultValue, nameField) => {
        const id = select.getAttribute('id');
        const div = document.querySelector(`div#${id}`);

        if (select.options[select.selectedIndex].value == defaultValue || select.options[select.selectedIndex].value == null) {
            select.classList.add('is-invalid');
            div.innerHTML = `Voce deve selecionar uma opção do campo ${nameField}`;
            return false;
        }

        div.innerHTML = '';
        select.classList.remove('is-invalid');
        
        return true;
    },
    passwordMatch: (password, passwordConfirm) => {
        const id = passwordConfirm.getAttribute('id');
        const div = document.querySelector(`div#${id}`);

        if (password.value != passwordConfirm.value) {
            passwordConfirm.classList.add('is-invalid');
            div.innerHTML = 'A senha informada não corresponde com a outra.';
            return false;
        }
        
        div.innerHTML = '';
        passwordConfirm.classList.remove('is-invalid');
        return true;
    }
}
