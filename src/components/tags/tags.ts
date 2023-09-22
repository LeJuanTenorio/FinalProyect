class Tags extends HTMLElement{

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
            console.log('tags')
        }}
    }

customElements.define("tags-genre", Tags);
export default Tags;