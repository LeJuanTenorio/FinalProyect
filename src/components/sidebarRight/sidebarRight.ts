import { seriesData } from "../data/seriesData";
import { Poster } from "../indexExport";
import style from "./sidebarRight.css"

class SidebarRight extends HTMLElement{
    poster: Poster[]= [];
    
    constructor(){
        super();
        this.attachShadow({mode:"open"});

        seriesData.forEach((seriesItem) => {
            const posterElement = this.ownerDocument.createElement("poster-img") as Poster;
            posterElement.poster = seriesItem.poster;
            this.poster.push(posterElement);
        });
    }
    

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <section class="container">

                <div class="trailerContainer">
                <h1>Latest Trailer</h1>
                </div>

                <div class="favoriteContainer">
    
                <h1>Favorite Shows</h1>
                </div>

                <div class="friendContainer">
                <h1>Friends</h1>
                </div>

            </section>

            <style>
            ${style}
            </style>
            `

            const trailerContainer = this.shadowRoot.querySelector(".trailerContainer");
            const favoriteContainer = this.shadowRoot.querySelector(".favoriteContainer");
            const friendContainer = this.shadowRoot.querySelector(".friendContainer");
      
            this.poster.forEach((posterElement) => {
                favoriteContainer?.appendChild(posterElement);
            });

            console.log('SidebarRight')
        }}
    }

customElements.define("sidebar-right", SidebarRight);
export default SidebarRight;