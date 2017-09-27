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
                required:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Required field</div>",
                maxlength:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Please input less than 30 characters</div>"
            },
            contactemail: 
            {
                required:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Required field</div>",
                email:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Please input a valid email</div>",
                maxlength:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Please input less than 100 characters</div>"
            },
            msg: 
            {
                required:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Required field</div>",
                maxlength:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Please input less than 500 characters</div>"
            }
        }
    });
}