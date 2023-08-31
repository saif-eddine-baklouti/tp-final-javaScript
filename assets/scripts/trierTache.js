class TrierTaches {
    constructor (el) {
        this._el = el;
        this._tachesDom = this._el.querySelector('[data-js-taches]');
        
        this.init();
    }
    init() {
        
        this._el.addEventListener('click', this.trierTaches.bind(this));
        
    }
    
    trierTaches(e){
        e.preventDefault();

        // console.log('hey')
        
        // console.log(e)
        // console.log(this._tachesDom)
        this.elTarget = e.target;
        this.index = this.elTarget.getAttribute('data-js-index');

        switch (this.elTarget.name) {
            case 'alpha':
                console.log('alpha')    
                // this.triAlpha(this.index);
                // console.log(this.index)
                this.triAlpha();
                break;
            case 'import':
                    console.log('import')    
                    
                this.triImport();
                break;    
        
            default:
                break;
        }
    }

    triAlpha () {
        let dom = '';
            index = 0
            
            aTaches.sort(function(a, b){
                if(a.tache < b.tache) { return -1;}
                if(a.tache > b.tache) { return 1; }
                return 0;
            })

            // this._tachesDom.innerHTML = 

            for (let i = 0, l = aTaches.length; i < l; i++) {
                // aTaches[i] = aTaches[i].sort();

                dom += 
                `
                <div >
                <p><small>Tache : </small>${aTaches[i].tache} - <small>Importance : </small>${aTaches[i].importance}  <button data-js-index=${index} name="affiche" > Afficher le detail</button><button data-js-index=${index} name="supprime" > Supprimer</button>  </p>
                </div>
                
                `;

                index++;

                
                
                
            }
            this._tachesDom.innerHTML = dom; 
    }

    triImport () {
        let dom = '';
            index = 0
            
            aTaches.sort(function(a, b){
                if(a.importance < b.importance) { return -1;}
                if(a.importance > b.importance) { return 1; }
                return 0;
            })

            // this._tachesDom.innerHTML = 

            for (let i = 0, l = aTaches.length; i < l; i++) {
                // aTaches[i] = aTaches[i].sort();

                dom += 
                `
                <div >
                <p><small>Tache : </small>${aTaches[i].tache} - <small>Importance : </small>${aTaches[i].importance}  <button data-js-index=${index} name="affiche" > Afficher le detail</button><button data-js-index=${index} name="supprime" > Supprimer</button>  </p>
                </div>
                
                `;

                index++;

                
                
                
            }
            this._tachesDom.innerHTML = dom; 
    }

};