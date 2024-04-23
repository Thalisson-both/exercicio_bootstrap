$(document).ready(function() {
    jQuery.validator.addMethod('nomeCompleto', function(value, element) {
        return this.optional(element) || value.trim().indexOf(' ') !== -1;
    }, 'Por favor, insira o nome completo.');

    $('.phone_with_ddd').mask('(00) 00000-0000');

    $('#formulario').validate({
        rules: {
            nome: {
                required: true,
                nomeCompleto: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 14,
                maxlength: 15 
            }
        },
        messages: {
            nome: {
                required: "Por favor, informe seu nome",
                minlength: "O nome deve ter pelo menos 3 caracteres"
            },
            email: {
                required: "Por favor, informe seu email",
                email: "Por favor, informe um email válido"
            },
            telefone: {
                required: "Por favor, informe seu telefone",
                minlength: "O telefone deve ser valido",
                maxlength: "O telefone deve ser valido" 
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element); 
            element.addClass("error-input");
            $(`label[for='${element.attr("id")}']`).addClass("error-label");
        },
        success: function(label, element) {
            $(element).removeClass("error-input");
            $(label).removeClass("error-label");
        }
    });
});