var phone=document.forms['form']['phone'];
var password=document.forms['form']['password'];

var phone_error=document.getElementById('phone_error');
var pass_error=document.getElementById('pass_error');

phone.addEventListener('textInput',phone_verify);
password.addEventListener('textInput',pass_verify);
function validated()
{
    if(phone.value.length<10)
    {
        phone.style.border="1px solid red";
        phone_error.style.display="block";
        phone.focus();
        return false;
    }
    if(password.value.length<8)
    {
        password.style.border="1px solid red";
        pass_error.style.display="block";
        password.focus();
        return false;
    }
}
function phone_verify()
{
    if(phone.value.length>9)
    {
        phone.style.border="1px solid silver";
        phone_error.style.display="none";
        return true;
    }
}
function pass_verify()
{
    if(password.value.length>7)
    {
        password.style.border="1px solid silver";
        pass_error.style.display="none";
        return true;
    }
}