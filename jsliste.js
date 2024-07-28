const todoForm = document.getElementById('todo-form');
const newTodoInput = document.getElementById('new-todo');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addTodo();
});

function addTodo() {
    const todoText = newTodoInput.value.trim();
    if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '✖';
        deleteButton.onclick = function() {
            li.remove();
        };

        li.appendChild(deleteButton);
        todoList.appendChild(li);
        newTodoInput.value = '';
    }
}
