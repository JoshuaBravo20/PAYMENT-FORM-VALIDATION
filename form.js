let form = document.querySelector('form');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    let credNums = /^[0-9]{13,16}$/;
    let cvc = /^[0-9]{1,3}$/;
    let nombres = /^[a-zA-Z]+$/;
    let amount = /^[0-9]{1,20}$/;
    let ciudad = /^[a-zA-Z\s]{4,30}$/;
    let estado = /^[a-zA-Z\s]{4,30}$/;
    let postcode = /^[0-9]{3,6}$/;

    //Validacion Tarjeta
    if (!credNums.test(form.creditcard.value)) {
        form.creditcard.classList.add('is-invalid');
    }
    else {
        form.creditcard.classList.remove('is-invalid');
        form.creditcard.classList.add('is-valid');
    }

    //Validacion CVC
    if (!cvc.test(form.cvc.value)) {
        form.cvc.classList.add('is-invalid');
    }
    else {
        form.cvc.classList.remove('is-invalid');
        form.cvc.classList.add('is-valid');
    }

    //Validacion Monto
    if (!amount.test(form.amount.value)) {
        form.amount.classList.add('is-invalid');
    }
    else {
        form.amount.classList.remove('is-invalid');
        form.amount.classList.add('is-valid');
    }
    
    //Validacion Primer Nombre
    if (!nombres.test(form.firstname.value)) {
        form.firstname.classList.add('is-invalid');
    }
    else {
        form.firstname.classList.remove('is-invalid');
        form.firstname.classList.add('is-valid');
    }

    //Validacion Apellido
    if (!nombres.test(form.lastname.value)) {
        form.lastname.classList.add('is-invalid');
    }
    else {
        form.lastname.classList.remove('is-invalid');
        form.lastname.classList.add('is-valid');
    }

    //Validacion Ciudad
    if (!ciudad.test(form.city.value)) {
        form.city.classList.add('is-invalid');
    }
    else {
        form.city.classList.remove('is-invalid');
        form.city.classList.add('is-valid');
    }

    //Validacion Estado
    if (!estado.test(form.state.value)) {
        form.state.classList.add('is-invalid');
    }
    else {
        form.state.classList.remove('is-invalid');
        form.state.classList.add('is-valid');
    }

    //Validacion Codigo Postal
    if (!postcode.test(form.postalcode.value)) {
        form.postalcode.classList.add('is-invalid');
    }
    else {
        form.postalcode.classList.remove('is-invalid');
        form.postalcode.classList.add('is-valid');
    }

    //Validacion Mensaje
    if (form.msgbox.value == '') {
        form.msgbox.classList.add('is-invalid');
    }
    else {
        form.msgbox.classList.remove('is-invalid');
        form.msgbox.classList.add('is-valid');
    }


 });