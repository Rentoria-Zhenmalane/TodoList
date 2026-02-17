const toDoList =
  [
    {
      name: 'kumain',
      dueDate: '222'
    }

  ];

renderTodo();

function renderTodo() {

  let todoListHTML = '';
  toDoList

  toDoList.forEach(todoObject => {
    //const todoObject = toDoList[i];
    //access task from array and store in todo variable
    //But since we use forEach loop, and it already have the variable or parameter toDoObject then this is unnecessary.

    //const dueDate = todoObject.dueDate;
    //const name = todoObject.name; 
    const { name, dueDate } = todoObject; //called as Destructuring, a shortcut from above.

    //need to separate the three elements using div so the CSS grid could work.
    //Why div? because div doesn't have a default style, so it's easier to style.
    const html = `
        <div> ${name} </div>
        <div>${dueDate} </div> 
        <button class="delete-button js-delete-button">Delete</button>

      `;

    //${index} → the position of the todo item in the array (provided by forEach).1 → tells JavaScript to remove exactly one element at that position.
    //So if you click the second delete button then index will become 1 --> hence, toDoList.splice(${1}, 1);

    //Template literals (backticks) allow embedding variables in strings.
    //Generating HTML using backticks is a technique that generates html inside Javascript,
    //Why call renderToDo() inside html? To update the UI everytime you hit delete button. This is called manual rendering.
    // and put it in html code then store it in html varaiable.

    todoListHTML += html;
    //accumulate the tasks
  })

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
  //gets the .js-todo-list from html file and change the content into todoListHTML.

  document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        toDoList.splice(index, 1);
        renderTodo();
      })
    })


}

document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    addTodo();
  });


function addTodo() {
  //This function is for getting user input and stores it into an array

  const inputElement = document.querySelector('.js-name-input');
  //Get the whole input
  const dateElement = document.querySelector('.js-date-input');

  const dueDate = dateElement.value;
  const name = inputElement.value;
  console.log(name, dueDate);
  //Gets whatever value the user put inside the textbox and print it in the console

  toDoList.push
    ({
      //name: name,
      //dueDate: dueDate
      name,
      dueDate
      //shortcut of above also called as shorthand
    });



  inputElement.value = '';
  dateElement.value = '';
  //every time we click add, the text box resets.

  renderTodo();

}


// 1. Create Array to store To Dos
//2. When we click add, get text from text box