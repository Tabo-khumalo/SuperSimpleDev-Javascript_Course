 const todoList = [
    {
      name:'make dinner',
      dueDate: '20/11/2023'
    },
   {
      name: 'have lunch',
      dueDate: '20/11/2023'
   } 
 ]

 renderTodolist();

 function renderTodolist() {
  let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
      const todoObj = todoList[i];
      const {name, dueDate} = todoObj;
      const HTML = `
      
        <div>${name}</div> 
        <div>${dueDate}</div>

        <button onclick = "
          todoList.splice(${i}, 1)
          renderTodolist();
        "class="delete-todo-btn">Delete</button>
      `
      todoListHTML += HTML;
    }

    console.log(todoListHTML)

    document.querySelector('.js-todoList')
      .innerHTML = todoListHTML;
 };

 

function addTodo () {

  const nameInputElement = document.querySelector('.js-input-name');
  const name = nameInputElement.value;

  const dateInputElement = document.querySelector('.js-input-dueDate');
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
  });

  console.log(todoList);

  nameInputElement.value = '';

  renderTodolist()
};