console.log("form validation");

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validName = false;
let validPhone = false;
let validEmail = false;

name.addEventListener('blur', ()=>{
    // console.log('blurred');
    //validate name
    let regex = /^[a-zA-Z]([0-9a-xA-X]){0,10}$/;
    let str = name.value;
    // console.log(regex, str);
    if(regex.test(str)){
        console.log('your name is valid');
        name.classList.remove('is-invalid');
        validName = true;
    }
    else{
        console.log('your name is invalid');
        name.classList.add('is-invalid');
        validName = false;
    }
})

email.addEventListener('blur', ()=>{
    console.log('blured');
    //validate email
    let regex = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2-8}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('your email is invalid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})


phone.addEventListener('blur', ()=>{ 
    console.log('phone blurred');
    //validate phone
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('your phone is invalid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('submit click');
    
    if(validEmail && validPhone && validName){
        console.log('name email and phone are valid ');
        let success = document.getElementById('success');
        success.classList.add('show');
        failure.classList.remove('show');
    }
    else{
        console.log('name email and phone are invalid , try again ');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        success.classList.remove('show');
    }
})

