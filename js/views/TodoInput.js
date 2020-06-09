import { EVENT_TYPE, KEY_TYPE } from "../utils/Constants.js";

class TodoInput {
    constructor({ onAdd }) {
        this.$todoInput = document.querySelector("#new-todo-title");
        this.onAdd = onAdd;

        this.$todoInput.addEventListener(EVENT_TYPE.KEY_DOWN, this.addTodoItem);
    }

    addTodoItem = event => {
        if (event.key !== KEY_TYPE.ENTER) {
            return;
        }
        const $newTodoTarget = event.target;
        this.onAdd($newTodoTarget.value);
        $newTodoTarget.value = "";
    }
}

export default TodoInput;
