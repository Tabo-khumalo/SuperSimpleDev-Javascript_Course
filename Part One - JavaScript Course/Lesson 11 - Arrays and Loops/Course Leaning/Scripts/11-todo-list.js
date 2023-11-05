 const todoList = ['make dinner','have lunch']

 renderTodolist();

 function renderTodolist() {
  let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
      const todo = todoList[i];
      const HTML = `<p>${todo}</p>`
      todoListHTML += HTML;
    }

    console.log(todoListHTML)

    document.querySelector('.js-todoList')
      .innerHTML = todoListHTML;
 };

 

function addTodo () {

  const inputElement = document.querySelector('.js-input');

  const name = inputElement.value;

  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';

  renderTodolist()
};