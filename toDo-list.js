const toDoList = [];

renderTodo();

function renderTodo() {

  let todoListHTML = '';

  for (i = 0; i < toDoList.length; i++) {
    const todo = toDoList[i];
    //access task from array and stoe in todo variable
    const html = `<p> ${todo}</p>`;
    // and put it in html code then store it in html varaiable.
    todoListHTML += html;
    //accumulate the tasks
  }

  console.log(todoListHTML);

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
  //gets the .js-todo-list from html file and change the content into todoListHTML.

}


function addTodo() {

  const inputElement = document.querySelector('.js-name-input');
  //Get the whole input

  const name = inputElement.value;
  console.log(name);
  //Gets whatever value the user put inside the textbox and print it in the console

  toDoList.push(name);
  console.log(toDoList);

  inputElement.value = '';
  //every time we click add, the text box resets.

  renderTodo();

}


// 1. Create Array to store To Dos
//2. When we click add, get text from text box