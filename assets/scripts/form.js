let aTaches = [];
let index = 0;

class Formulaire {

	constructor(el) {
    
        this._el = el;
        this._elsInputText = this._el.querySelectorAll('input[type="text"]');
        this._wrappeNomTache = this._elsInputText[0].previousElementSibling;  
        this._elsInputRadio = this._el.querySelectorAll('input[type="radio"]');  
        this._elWrappeInputRadio = this._el.querySelector('.niveau');  
        this._tachesDom = document.querySelector('[data-js-taches]');
        this._elBtn = this._el.querySelector('button');
        this._tache = {};
        this._checkRadio = false;
        this._checkText = false;
        this._estValide = true;

        this.init();
	}
    /**
     * Initialise le gestionnaire d'événement sur le bouton du formulaire
     */
	init() {
        // console.log('init');
        this._elBtn.addEventListener('click', this.ajouterTache.bind(this));
        // console.log(this)
    }
    
    /**
     * Gestion de la soumission du tache
     * @param {object} e 
    */
    ajouterTache(e) {
        e.preventDefault();
        
        if (this.validationTache()) {
            this.recupereInjecteTache();
            this.resetForm();
            
        }
                
            }
    validationTache () {
        
        if (!this._elsInputText[0].value == '') {
            this._checkText = true
            if (this._wrappeNomTache.classList.contains('error')) this._wrappeNomTache.classList.remove('error')
    } else {
        this._wrappeNomTache.classList.add('error')
        this._checkText = false
            
        }

        for (let i = 0, l = this._elsInputRadio.length; i < l; i++) {
            if (this._elsInputRadio[i].checked) {
                this._checkRadio = true
                if (this._elWrappeInputRadio.classList.contains('error')) this._elWrappeInputRadio.classList.remove('error')
                
                break;
            } else {
                this._elWrappeInputRadio.classList.add('error')
                this._checkRadio = false;
            }
        }

        if (this._checkText && this._checkRadio) {
            
            return this._estValide 
        } else {
            return false
        }
    }

    recupereInjecteTache () {
        
        let tache = {};
            
        

        for (let i = 0, l = this._elsInputText.length; i < l; i++) {
            let cle = this._elsInputText[i].name,
                valeur = this._elsInputText[i].value;
                tache[cle] = valeur;
        }
        
        for (let i = 0, l = this._elsInputRadio.length; i < l; i++) {
            if (this._elsInputRadio[i].checked) {
            let cleR = this._elsInputRadio[i].name,
                valeurR = this._elsInputRadio[i].value;
                tache[cleR] = valeurR;
            }
        }
            aTaches.push(tache)

            let dom = 
            `
            <div >
            <p><small>Tache : </small>${tache['tache']} - <small>Importance : </small>${tache['importance']}  <button data-js-index=${index} name="affiche" > Afficher le detail</button><button data-js-index=${index} name="supprime" > Supprimer</button>  </p>
            </div>
            `;
            
            
    
            this._tachesDom.insertAdjacentHTML("beforeend", dom)
            index++;
            

    }

    resetForm () {
        this._el.reset();
    }


};
