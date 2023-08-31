    class Tache {
        constructor(el){
            this._el = el; 
            // this._btnDetail = el.querySelectorAll('[data-js-btn]');
            
            // this._elsTache = this._el.querySelectorAll('data-js-index');
            this._tachesDom = document.querySelector('[data-js-taches]');
            this._detail = document.querySelector('[data-js-detail]');
            this.init();
        }
        
        init() {
            
            this._el.addEventListener('click', this.controleTache.bind(this));
            
        }
        controleTache(e) {
            e.preventDefault();
                this.elTarget = e.target;
                this.index = this.elTarget.getAttribute('data-js-index');
                // console.log(index)
                // console.log(elTarget.name)
                switch (this.elTarget.name) {
                    case 'affiche':
                        console.log('affiche')    
                        this.afficheDetailTache(this.index);
                        console.log(this.index)
                        break;
                        case 'supprime':
                            console.log('supprime')    
                            
                        this.supprimeTache(this.index);
                        break;    
                
                    default:
                        break;
                }
            // console.log(this._btnDetail)
            // console.log(this._elsTache)
        }


        afficheDetailTache(i) {
            let dom = 
            `
                <p>Tache : ${aTaches[i].tache}</p>
                <p>Description : ${aTaches[i].description === '' ? 'Aucune description disponible.' : aTaches[i].description}</p>
                <p>Importance : ${aTaches[i].importance}</p>
            `;
            this._detail.innerHTML = dom;
        }
        
        supprimeTache (x) {
            let dom = '';
            index = 0
            aTaches.splice(x,1)

            // this._tachesDom.innerHTML = 

            for (let i = 0, l = aTaches.length; i < l; i++) {
                console.log(aTaches[i])

                dom += 
                `
                <div >
                <p><small>Tache : </small>${aTaches[i].tache} - <small>Importance : </small>${aTaches[i].importance}  <button data-js-index=${index} name="affiche" > Afficher le detail</button><button data-js-index=${index} name="supprime" > Supprimer</button>  </p>
                </div>
                
                `;

                index++;

            }
            this._detail.innerHTML = '';
            this._tachesDom.innerHTML = dom; 
        }
    }