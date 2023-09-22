import { ReviewContainer} from "../indexExport";
import styles from "./megaReview.css"

class MegaReview extends HTMLElement{

    reviews: ReviewContainer[] = [];

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        dataCards.forEach((reviews) =>{
            const review = this.ownerDocument.createElement("review-container") as ReviewContainer;
            review.setAttribute(Attribute.background,cards.name);
            card.setAttribute(Attribute.gender,cards.gender);
            card.setAttribute(Attribute.house,cards.house);
            card.setAttribute(Attribute.specie,cards.species);
            this.cards.push(card);
        })
    }
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <review-container></review-container>
                <style>
                ${styles}
                <style>
            `
            console.log("megareview")
        }}
    }

customElements.define("mega-review", MegaReview);
export default MegaReview;

