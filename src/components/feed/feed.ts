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
            <header-welcome></header-welcome>
            <review-container></review-container>
            <comment-feed></comment-feed>
            `
            console.log("feed")
        }}
    }

customElements.define("main-feed", Feed);
export default Feed;
