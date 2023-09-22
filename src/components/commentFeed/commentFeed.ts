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
            <p>commentfeed<p>
            `
            console.log("commentfeed")
        }}
    }

customElements.define("comment-feed", CommentFeed);
export default CommentFeed;
