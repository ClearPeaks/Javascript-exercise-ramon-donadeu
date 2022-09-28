class acordion extends HTMLElement{
    constructor(){
        super();
        this.content
        this.title
        this.id
    }

    static get observedAttributes(){
        return['acordion-content', 'acordion-title', 'acordion-id']
    }

    attributeChangeCallback(atr, oldValue, newValue){
        switch(atr){
            case 'acordion-elements':
                this.name = newValue
            case 'acordion-title':
                this.title = newValue
            case 'acordion-id':
                this.id = newValue
        }
    }

    connectedCallback(){
        this.innerHTML = `
        <dt class="acordion__title" id="${this.id}" active = "false">
            <h2 class="prevent-select">${this.title}</h2>
            <img class="prevent-select" src="./img/expand.svg">
        </dt>
        <dd class="acordion__content" >
            <p>${this.content}</p>
        </dd>
        `
    }

}

window.customElements.define('acordion-component', acordion)