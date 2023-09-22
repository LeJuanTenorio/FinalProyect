import MainDashStyle from "./mainDash.css"

class MainDash extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>
                ${MainDashStyle}
            </style>
            <section>
            </section>
            `
            console.log('mainDash')

        }}
    }

customElements.define("main-dash", MainDash);

