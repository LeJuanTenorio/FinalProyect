class HeaderWelcome extends HTMLElement{

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
            
            `
            console.log("welcome")
        }}
    }

customElements.define("header-welcome", HeaderWelcome);
export default HeaderWelcome;
