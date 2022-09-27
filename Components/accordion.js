class acordion extends HTMLElement{
    constructor(){
        super();
        this.elements
        this.title
    }

    static get observedAttributes(){
        return['acordion-elements', 'acordion-title']
    }

    attributeChangeCallback(atr, oldValue, newValue){
        switch(atr){
            case 'acordion-elements':
                this.name = newValue
            case 'acordion-title':
                this.title = newValue
        }
    }

    connectedCallback(){
        this.innerHTML = `
        <div class='acordion'>
            <div class='acordion__title>${this.title}</div>
            <div class='acordion__elements></div>
        </div>
        `
    }

}

window.customElements.define('acordion-component', acordion)