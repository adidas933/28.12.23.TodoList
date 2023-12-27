/* 
אנחנו נפתח to do list  
אנחנו נכנסים לעמוד שיש בו כותרת --
תיבת טקסט לתוכן למטלה, ותיבת טקסט לתאריך, --
בהוספה של מטלה המטלה תתווסף לhtml 
בנוסף הציפיה שלי זה כשבנאדם סוגר את הדפדפן ונכנס המשימות שוב יופיעו (נחשו לאיזה כיוון זה הולך)
שימו לב שיש פה בעיה איך לשמור את הנתונים בסטורג׳
*/

const inputTask = document.querySelector('.inputTask');
const inputDate = document.querySelector('.inputDate');
const taskUl = document.querySelector('.taskUl');

document.addEventListener('DOMContentLoaded', displayTasks);

document.querySelector('.addTaskBtn').addEventListener('click', function() {
  const taskText = `${inputTask.value} ${inputDate.value}`;
  addTaskToDOM(taskText);
  insertToStorage(taskText);
})

function insertToStorage(task) {
  const tasksFromStorage = getTaskFromStorage(); 
  tasksFromStorage.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasksFromStorage));
}

function displayTasks() {
  const tasksFromStorage = getTaskFromStorage();
  tasksFromStorage.forEach((task) => addTaskToDOM(task));
}

function getTaskFromStorage() {
  let tasksFromStorage; 
  if (localStorage.getItem('tasks') === null) { 
    tasksFromStorage = [];
  } else {
    tasksFromStorage = JSON.parse(localStorage.getItem('tasks')); 
  }
  return tasksFromStorage;
}

function addTaskToDOM(task) {
  const listItem = document.createElement('li');
  listItem.innerText = task;
  taskUl.appendChild(listItem);
}
