import CommentFeedStyle from "./commentFeed.css"
import Firebase, { getReview, } from "../../utils/firebase"
import { Review } from "../../types/dataManage";
import Comment, {CommentAttribute} from "../comment/comment";
import { addObserver } from "../../store";


class CommentFeed extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async getFirestoreReviews() {
        Firebase.getReviewsLoop(this.renderReviews);
        console.log("HELLO MUNDITO");
    }

    renderReviews = (docs: Review[]) => {
        const container = this.shadowRoot?.querySelector('.container');
        
        if (container) {
            container.innerHTML = ''}

        console.log("IM RENDDERING SOMEHTIN YES SIER")

        for (const data of docs) {
            console.log("MY NAME IS JEFF");
            const resolvedData = data;
            console.log("THIS IS DATA", resolvedData);
            const comment = document.createElement('my-comment');
            comment.setAttribute(CommentAttribute.name, resolvedData.user);
            comment.setAttribute(CommentAttribute.comment, resolvedData.comment);
            comment.setAttribute(CommentAttribute.serie, resolvedData.serie);
            comment.setAttribute(CommentAttribute.poster, resolvedData.poster);
            comment.setAttribute(CommentAttribute.idd, resolvedData.id);
            console.log("THIS IS COMMENT", comment);
            container?.appendChild(comment);
            console.log("THIS IS CONTAINER", container)
        }
    }

    async connectedCallback() {
        await this.render();
        await this.getFirestoreReviews();
    }

    async render() {
        if (this.shadowRoot && this.shadowRoot.innerHTML === '') {
            this.shadowRoot.innerHTML = `
            <style>
            ${CommentFeedStyle}
            </style>
            `;

            const container = this.ownerDocument.createElement('div');
            container.className = "container";
            this.shadowRoot?.appendChild(container);
        }
    }
}

customElements.define("comment-feed", CommentFeed);
export default CommentFeed;