import style from "./feed.css"

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
            <section class="feed">
            <header-welcome></header-welcome>
            <review-container></review-container>
            <comment-feed></comment-feed>
            <section class="feed">
            
            <style>
            ${style}
            </styles>
            `
            console.log("feed")
        }}
    }

customElements.define("main-feed", Feed);
export default Feed;
