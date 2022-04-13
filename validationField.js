/// *************************************************** ///
/// *************** VALIDADOR DE CAMPOS *************** ///
/// *** GITHUB https://github.com/ErleyMartins ******** ///
/// *************************************************** ///

validationField = {
    validationInput: (input, min, max, nameField) => {
        const id = input.getAttribute('id');
        const span = document.querySelector(`div#${id} span`);
        
        if (input.value === '' || input.value == null) {
            input.classList.add('is-invalid');
            span.innerHTML = `O campo ${nameField} e obrigatorio.`;
            return false;
        }
        else if (input.value.length < min) {
            input.classList.add('is-invalid');
            span.innerHTML = `O campo ${nameField} deve ter no minimo ${min} caracteres.`;
            return false;
        }
        else if (input.value.length > max) {
            input.classList.add('is-invalid');
            span.innerHTML = `O campo ${nameField} deve ter no maximo ${max} caracteres.`;
            return false;
        }

        span.innerHTML = '';
        input.classList.remove('is-invalid');
        
        return true;
    },
    validationSelect: (select, defaultValue, nameField) => {
        const id = select.getAttribute('id');
        const span = document.querySelector(`div#${id} span`);

        if (select.options[select.selectedIndex].value == defaultValue || select.options[select.selectedIndex].value == null) {
            select.classList.add('is-invalid');
            span.innerHTML = `Voce deve selecionar uma opção do campo ${nameField}`;
            console.log(span);
            return false;
        }

        span.innerHTML = '';
        select.classList.remove('is-invalid');
        
        return true;
    }
}