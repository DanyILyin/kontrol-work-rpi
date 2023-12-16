import {createElement} from "../render.js";

function createInputComponentTemplate() {
    return (
        `<input type="text" id="search-input" autocomplete="off" placeholder="Поиск...">`
            );
}

export class InputComponent {
    getTemplate() 
    {
        return createInputComponentTemplate();
    }
    

    getElement() 
    {
        if (!this.element) 
        {
        this.element = createElement(this.getTemplate());
        }
        return this.element;
    }


    removeElement() 
    {
        this.element = null;
    }
}
