import CommentStyle from "./comment.css"

class Comment extends HTMLElement{

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
            <div id="comments-container"</div>
            <img class="poster" src="https://www.themoviedb.org/t/p/original/iSZAmDQHLRv0xXmpNRkizcPLanW.jpg">
            <p>I have loved this series, it blows my mind how time travel is and how intriguing the characters are. It's a bit confusing.</p>
            <hr></hr>
            <form id="comment-form">
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-save-3244517-2701888.png?f=webp">
            <img src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png">
            <textarea id="comment-text" placeholder="What do you think of the show?"></textarea>
            <button type="submit">Send</button>
            </form>
            `
            console.log("comment")
        }}
    }

customElements.define("my-comment", Comment);
export default Comment;
