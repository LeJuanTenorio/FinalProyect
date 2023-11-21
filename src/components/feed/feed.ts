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

                <div class="lowerFeed">
                    <mega-review></mega-review>
                    <comment-feed></comment-feed>
                </div>

            </section>
            
            <style>
            ${style}
            </styles>
            `
            console.log("feed")
        }}
    }

customElements.define("main-feed", Feed);
export default Feed;
