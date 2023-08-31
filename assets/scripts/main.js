window.addEventListener('DOMContentLoaded', function() {


    let elsForm = document.querySelectorAll('[data-js-form]'),
        elsTaches = document.querySelectorAll('[data-js-taches]'),
        elsTriTaches = document.querySelectorAll('[data-js-tri-taches]');
        
        for (let i = 0, l = elsForm.length; i < l; i++) {
        new Formulaire(elsForm[i]);
        };

        for (let i = 0, l = elsTaches.length; i < l; i++) {
            new Tache(elsTaches[i]);
            
            };

        for (let i = 0, l = elsTriTaches.length; i < l; i++) {
            // new Tache(elsTaches[i]);
            new TrierTaches(elsTriTaches[i]);
            console.log(elsTriTaches[i])
        };
    }); 