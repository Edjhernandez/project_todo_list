const inTask = document.querySelector('input');
const arrTasks = [];

export default function catchInput() {
  arrTasks.push({
    textTask: inTask.value,
    state: false,
  });
  inTask.value = '';
  return arrTasks;
}
