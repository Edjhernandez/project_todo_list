const inTask = document.querySelector('input');
const arrTasks = [];
/* {
    textTask: 'wash the dogs',
    state: false,
  },
  {
    textTask: 'Complete To Do list project',
    state: false,
  },
  {
    textTask: 'fix car',
    state: false,
  },
]; */

export default function catchInput() {
  arrTasks.push({
    textTask: inTask.value,
    state: false,
  });
  inTask.value = '';
  return arrTasks;
}
