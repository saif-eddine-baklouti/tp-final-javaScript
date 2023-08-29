class Formulaire {
	constructor(el) {
    
        this._el = el;
        // console.log(this._el);
        this._elsInputText = this._el.querySelectorAll('input[type="text"]');  
        // console.log(this._elsInputText);
        this._elsInputRadio = this._el.querySelectorAll('input[type="radio"]');  
        // console.log(this._elsInputRadio);
        this._elBtn = this._el.querySelector('button');
        // console.log(this._elBtn);
        
        this.init();
	}
    /**
     * Initialise le gestionnaire d'événement sur le bouton du formulaire
     */
	init() {
        // console.log('init');
        this._elBtn.addEventListener('click', this.recupererTache.bind(this));
        // console.log(this)
    }
    
    /**
     * Gestion de la soumission du tache
     * @param {object} e 
     */
    recupererTache(e) {
        e.preventDefault();


    };

};