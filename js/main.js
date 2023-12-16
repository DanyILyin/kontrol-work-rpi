import { RenderPosition, render } from "./render.js";
import {InputComponent} from "./components/input-component.js";
import { FormFoodListComponent } from "./components/list-component.js";
import { food } from "./mock/mocks.js";

export let foodArr = food;


const inputComponent = document.querySelector('body');
const foodListComponent = document.querySelector('body');


render(new InputComponent(), inputComponent, RenderPosition.BEFOREBEGIN);
render(new FormFoodListComponent, foodListComponent);



const res = document.querySelector('.result');
const text = document.querySelector('#search-input');
text.addEventListener('input', e => filter()
);


function filter(searchText) {
    rerender();
    Object.values(foodArr).forEach((columnElement) => {
        if (!foodArr.columnElement.Search(searchText)){
            foodArr.slice(foodArr.columnElement);
        }
    });
}


function rerender (){
    foodListComponent.innerHTML = '';;
}



