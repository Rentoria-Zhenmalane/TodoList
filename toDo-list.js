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

  for (let i = 0; i < toDoList.length; i++) {
    const todoObject = toDoList[i];
    //access task from array and store in todo variable

    //const dueDate = todoObject.dueDate;
    //const name = todoObject.name; 
    const { name, dueDate } = todoObject; //called as Destructuring, a shortcut from above.


    //need to separate the three elements using div so the CSS grid could work.
    //Why div? because div doesn't have a default style, so it's easier to style.
    const html = `
      <div> ${name} </div>
      <div>${dueDate} </div> 
      <button class="delete-button" onclick=
        "toDoList.splice(${i}, 1);
        renderTodo();
      ">Delete</button>

    `;
    //Template literals (backticks) allow embedding variables in strings.
    //Generating HTML using backticks is a technique that generates html inside Javascript,
    //Why call renderToDo() inside html? To update the UI everytime you hit delete button. This is called manual rendering.
    // and put it in html code then store it in html varaiable.

    todoListHTML += html;
    //accumulate the tasks
  }


  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
  //gets the .js-todo-list from html file and change the content into todoListHTML.

}


function addTodo() {
  //This function is for getting user input and stores it into an array

  const inputElement = document.querySelector('.js-name-input');
  //Get the whole input
  const dateElement = document.querySelector('.js-date-input');

  const dueDate = dateElement.value;
  const name = inputElement.value;
  console.log(name);
  //Gets whatever value the user put inside the textbox and print it in the console

  toDoList.push
    ({
      //name: name,
      //dueDate: dueDate
      name,
      dueDate
      //shortcut of above
    });



  inputElement.value = '';
  dateElement.value = '';
  //every time we click add, the text box resets.

  renderTodo();

}


// 1. Create Array to store To Dos
//2. When we click add, get text from text box