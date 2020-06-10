import { EVENT_TYPE, KEY_TYPE, WORD_TYPE } from '../utils/Constants.js';

class TodoInput {
    constructor({ onAdd }) {
        this.$todoInput = document.querySelector('#new-todo-title');
        this.$todoInput.addEventListener(EVENT_TYPE.KEY_DOWN, (event) => this.addTodoItem(event, onAdd));
    }

    addTodoItem(event, onAdd) {
        if (event.key !== KEY_TYPE.ENTER) {
            return;
        }
        const $newTodoTarget = event.target;
        if ($newTodoTarget.value.trim(WORD_TYPE.BLANK).length === 0) {
            return;
        }
        onAdd($newTodoTarget.value);
        $newTodoTarget.value = WORD_TYPE.EMPTY;
    }
}

export default TodoInput;
