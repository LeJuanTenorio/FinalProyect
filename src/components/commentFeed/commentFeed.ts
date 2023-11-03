import CommentFeedStyle from "./commentFeed.css"

class CommentFeed extends HTMLElement{

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
            ${CommentFeedStyle}
            </style>
            <my-comment class="alt"></my-comment>
            `
            console.log("commentfeed")
        }}
    }

customElements.define("comment-feed", CommentFeed);
export default CommentFeed;
