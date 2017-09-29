/* global $ */
$(document).ready(init);

function init()
{
    $("#send").click(validateForm);
}

function validateForm()
{
    $("#contactform").validate(
    {
        focusCleanup: false,
        rules: 
        {
            contactname: 
            {
                required: true,
                maxlength: 50
            },
            contactemail: 
            {
                required: true,
                maxlength: 100
            },
            msg:
            {
                required: true,
                maxlength: 1000
            }
        },
        messages: 
        {
            contactname: 
            {
                required:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Campo requerido</div>",
                maxlength:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Introduce menos de 50 caracteres</div>"
            },
            contactemail: 
            {
                required:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Campo requerido</div>",
                email:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Introduce una dirección de correo válida</div>",
                maxlength:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Introduce menos de 100 caracteres</div>"
            },
            msg: 
            {
                required:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Campo requerido</div>",
                maxlength:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Introduce menos de 1000 caracteres</div>"
            }
        }
    });
}