import CommentStyle from "./commentFeed.css"

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
            ${CommentStyle}
            </style>
            <p>comment</p>
            <div id="comments-container"</div>
            
            <form id="comment-form">
            <textarea id="comment-text" placeholder="What do you think of the show?"></textarea>
            <button type="submit">Send</button>
            </form>
            `
            console.log("commentfeed")
        }}
    }

customElements.define("comment-feed", CommentFeed);
export default CommentFeed;
