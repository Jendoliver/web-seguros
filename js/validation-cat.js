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
        focusCleanup: true,
        rules: 
        {
            contactname: 
            {
                required: true,
                maxlength: 30
            },
            contactemail: 
            {
                required: true,
                maxlength: 100
            },
            msg:
            {
                required: true,
                maxlength: 500
            }
        },
        messages: 
        {
            contactname: 
            {
                required:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Camp necessari</div>",
                maxlength:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Introdueix menys de 30 caracters</div>"
            },
            contactemail: 
            {
                required:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Camp necessari</div>",
                email:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Introdueix una direcció de correu vàlida</div>",
                maxlength:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Introdueix menys de 100 caracters</div>"
            },
            msg: 
            {
                required:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Camp necessari</div>",
                maxlength:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Introdueix menys de 500 caracters</div>"
            }
        }
    });
}