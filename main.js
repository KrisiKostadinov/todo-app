var todos = document.querySelector('ol');
var input = document.querySelector('input');
var form = document.querySelector('form');
var dismissAll = document.querySelector('[dismiss-all]');
var dismissCompleted = document.querySelector('[dismiss-completed]');

dismissAll.addEventListener('click', (() => {
    todos.innerHTML = '';
}));

dismissCompleted.addEventListener('click', (() => {
    document.querySelectorAll('ol li').forEach(todo => {
        if(todo.classList.contains('completed')) {
            todo.remove();
        }
    });
}));

form.addEventListener('submit', event => {
    event.preventDefault();
    var text = input.value;
    var li = document.createElement('li');
    li.innerHTML += `
        <span class="todo-text">${text}</span>
    `;

    li.addEventListener('dblclick', event => {
        event.target.classList.toggle('completed');
    });
    
    todos.appendChild(li);

    input.focus();
    form.reset();
});