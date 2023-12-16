import { createElement } from "../render.js";
import { FormOneFoodComponent } from "./one-list-component.js";
import { food } from "../mock/mocks.js";

function createFormFoodListTemplate() {
    const tasksWindow = document.createElement("div");
    tasksWindow.className = "list";


    // Проходимся по массиву переводим данные в HTML код
    Object.values(food).forEach((columnElement) => {
        const columnTasks = document.createElement("div");
        columnTasks.className = 'list-li';
        const food = new FormOneFoodComponent(columnElement);
        const template = food.getTemplate();
        columnTasks.innerHTML += template;
        tasksWindow.innerHTML+=columnTasks.outerHTML;
    });

    return tasksWindow.outerHTML;
}

export class FormFoodListComponent {
    getTemplate() {
        return createFormFoodListTemplate();
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

