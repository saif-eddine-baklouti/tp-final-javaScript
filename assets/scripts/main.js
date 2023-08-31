window.addEventListener('DOMContentLoaded', function() {

    let aTaches =[],
        elsForm = document.querySelectorAll('[data-js-form]');
        
        for (let i = 0, l = elsForm.length; i < l; i++) {
        new Formulaire(elsForm[i]);
        };
    });