/// *************************************************** ///
/// *************** VALIDADOR DE CAMPOS *************** ///
/// *** GITHUB https://github.com/ErleyMartins ******** ///
/// *************************************************** ///

validationField = {
    validationInput: (input, min, max, nameField) => {
        const id = $(input).attr('id');

        if ($(input).val() === '' || $(input).val() == null) {
            $(`div#${id} span`).text(`O campo ${nameField} e obrigatorio.`);
            $(input).addClass('is-invalid');
            return false;
        }
        else if ($(input).val().length < min) {
            $(`div#${id} span`).text(`O campo ${nameField} deve ter no minimo ${min} caracteres.`);
            $(input).addClass('is-invalid');
            return false;
        }
        else if ($(input).val().length > max) {
            $(`div#${id} span`).text(`O campo ${nameField} deve ter no maximo ${max} caracteres.`);
            $(input).addClass('is-invalid');
            return false;
        }

        $(`div#${id} span`).text('');
        $(input).removeClass('is-invalid');
        
        return true;
    },
    validationSelect: (select, defaultValue, nameField) => {
        const id = $(select).attr('id');

        if ($(select).val() == defaultValue || $(select).val() == null) {
            $(`div#${id} span`).text(`Voce deve selecionar uma opção do campo ${nameField}`);
            $(select).addClass('is-invalid');
            return false;
        }

        $(`div#${id} span`).text('');
        $(select).removeClass('is-invalid');
        
        return true;
    }
}