import { SidebarRight, Feed } from "..";
import styles from "./mainSearch.css"

class SearchComponent extends HTMLElement{

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
                ${styles}
                <style>
            `
        }}
    }

customElements.define("search-element", SearchComponent);
export default SearchComponent;

