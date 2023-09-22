class Feed extends HTMLElement{

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
            console.log("feed")
        }}
    }

customElements.define("main-feed", Feed);
export default Feed;
