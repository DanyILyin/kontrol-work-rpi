import {createElement} from "../render.js";

function createFormOneTaskTemplate(title) {
    return (
                `<li>${title}</li>`
            );
}

export class FormOneFoodComponent {

    #title = null;
    
    constructor({title}){
    this.#title = title;
    }


    getTemplate() {
        return createFormOneTaskTemplate(this.#title);
    }

    getElement() {
        if (!this.element) {
        this.element = createElement(this.getTemplate());
    }
        return this.element;
    }

    removeElement() {
        this.element = null;
    }
}
