const taskLists = document.querySelectorAll('.task-list');
const tasks = document.querySelectorAll('.task-container');
const newTaskTitle = document.getElementById('title');
const newTaskDescription = document.getElementById('description');


// Drag & Drop functionality

let taskDragged

tasks.forEach(task => task.addEventListener('dragstart', dragStart));

taskLists.forEach(taskList => {
  taskList.addEventListener('drop', dragDrop);
  taskList.addEventListener('dragover', dragOver);
})

function dragStart(e){
  taskDragged = e.target;
}

function dragOver(e){
  e.preventDefault();
}

function dragDrop(e){
  e.target.append(taskDragged)
}


const backlogTasks = document.querySelector('#backlog .task-list');




// Task Creation

function createTask(){
  // create a new task card and assign it a class for styling
  const taskCard = document.createElement('div');
  taskCard.classList.add('task-container');

  // create a header div for the new card and assign it a class for styling
  const taskHeader = document.createElement('div');
  taskHeader.classList.add('task-header')

  // create a new paragraph element for the header
  const taskTitle = document.createElement('p')
  taskTitle.textContent = "Hello"

  // create a div to hold the task description and assign it a class for styling
  const taskDescriptionContainer = document.createElement('div')
  taskDescriptionContainer.classList.add('task-description-container')

  // create a new paragraph element for the description container
  const taskDescription = document.createElement('p')
  taskDescription.textContent = 'description'

  // create a delete button for the card
  const deleteButton = document.createElement('button')
  deleteButton.textContent = '☒'
  deleteButton.classList.add('delete-button')

  // append the created header and button paragraph to the header
  taskHeader.append(taskTitle, deleteButton)

  // append the created description to the description container
  taskDescriptionContainer.append(taskDescription)

  // append the header and the description div to the task card
  taskCard.append(taskHeader, taskDescriptionContainer)


  // append the fully formed task card to the first column
  backlogTasks.append(taskCard)

}

