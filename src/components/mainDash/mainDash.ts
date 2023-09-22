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
            `
            console.log("mainDash")
        }}
    }

customElements.define("main-dash", DashMain);
export default DashMain;

