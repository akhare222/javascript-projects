const todoList = [];

function renderTodoList(){
    let todoListHTML = '';

    todoList.forEach((todoObject, idx) =>{

        const {name, dueDate} = todoObject;
        const html = 
        `<div> ${name} </div>
        <div> ${dueDate} </div>
        <button onclick="todoList.splice(${idx}, 1); renderTodoList();" 
            class="delete-todo-button">
            Delete
        </button> `

        todoListHTML += html;

    });

    /*for(let i = 0; i < todoList.length; i++){
        
        
    }*/

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date-input');

    const name = inputElement.value;
    const dueDate = dateInputElement.value;
    todoList.push({name, dueDate});
    inputElement.value = '';
    dateInputElement.value = '';

    renderTodoList();
}