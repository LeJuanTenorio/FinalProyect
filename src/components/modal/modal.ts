import Style from "./modal.css";

class Modal extends HTMLElement {
    private isVisible: boolean = false; // Define the isVisible property

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <style>
                ${Style}
                </style>
                <div id="modal" class="${this.isVisible ? 'visible' : 'hidden'}">
                    <!-- Your modal content goes here -->
                    <slot></slot>
                </div>
            `;

            const modalElement = this.shadowRoot.getElementById("modal");
            if (modalElement) {
                modalElement.addEventListener("click", (event) => {
                    event.stopPropagation();
                });
            }
        }
    }

    show() {
        this.isVisible = true;
        this.render();
    }

    hide() {
        this.isVisible = false;
        this.render();
    }
}

customElements.define("my-modal", Modal);
export default Modal;
