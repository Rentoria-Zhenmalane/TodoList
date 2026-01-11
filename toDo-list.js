const toDoList = [];

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

}


// 1. Create Array to store To Dos
//2. When we click add, get text from text box