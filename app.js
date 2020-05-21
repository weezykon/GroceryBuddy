//DOM SELECTORS
const itemAdded = document.querySelector(".todo-input");
const addItemBtn = document.querySelector(".todo-button");
const todos= document.querySelector(".todo-list");

//EVENT LISTENERS
addItemBtn.addEventListener("click", addNewItem);
todos.addEventListener("click", deleteCheck);


//1.Function addItem
function addNewItem(e) {
  // alert("Are you working?")

  //Prevent defult form behavior
  e.preventDefault();

  //Ensure an empty item is not added to list
  if (itemAdded.value == "") {
    itemAdded.placeholder = `Add an item to the list`;
    return false;
}

  //Create a new todoDiv
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  
  //Create a new li that will live inside the todoDiv
  const newTodo = document.createElement("li");
  newTodo.innerText = itemAdded.value;
  
  //Add a class of todo item to all the todos newly created
  newTodo.classList.add("todo-item");

  //Create an edit button
  const editButton = document.createElement('button');
  editButton.innerHTML ='<i class="las la-pen"></i>';
  editButton.classList.add("edit-btn");

  //Create a CheckMark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="las la-check"></i>';
  completedButton.classList.add("complete-btn");
 
   //Create trash Button
   const trashButton = document.createElement("button");
   trashButton.innerHTML = '<i class="las la-trash"></i>';
   trashButton.classList.add("trash-btn");  

   //Append the li's text and the buttons
  todoDiv.appendChild(newTodo);
  todoDiv.appendChild(editButton);
  todoDiv.appendChild(completedButton);
  todoDiv.appendChild(trashButton);

  //clear todo input value after each successful addition
  itemAdded.value = "";
  itemAdded.placeholder="Enter a new item.."
  

  //Append TodoDiv TO TodoList
  todos.appendChild(todoDiv);
}

//2.Function deleteCheck
function deleteCheck(e) {

  //Get the item(button) that is clicked on
  const item = e.target; 

  //Apply that button's styles to it
  if (item.classList[0] === "trash-btn") {  
    // e.target.parentElement.remove();

     //Add Animation 
    const todo = item.parentElement;
    todo.classList.add("fall");

    //Remove todo when animation is done(transitionend)
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //If this occurs instead, checkmark todo
  else if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    console.log(item);
  }
  else if (item.classList[0] === 'edit-btn'){
    const todo = item.parentElement;
    editedInput = prompt("Edit this item...");
    todo.innerText = editedInput;
    console.log(todo);
  }
}
