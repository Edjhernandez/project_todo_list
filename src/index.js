/* import './styles.css';
import printList from './printList.js';
import svgDelete from './assets/delete_FILL0_wght700_GRAD0_opsz40.svg';
import svgMore from './assets/more_vert_FILL0_wght700_GRAD0_opsz24.svg';

const inTask = document.querySelector('input');
const clearbtn = document.querySelector('button');
let arrtask = [];

inTask.addEventListener('keyup', (e) => {
  if ((e.code === 'Enter' || e.code === 'NumpadEnter') && (inTask.value)) {
    arrtask.push({
      txt: inTask.value,
      state: false,
    });
    inTask.value = '';
    localStorage.setItem('lsTask', JSON.stringify(arrtask));
    printList(arrtask);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.length === 0) {
    arrtask = [
      {
        txt: 'wash the dogs',
        state: false,
      },
      {
        txt: 'Complete To Do list project',
        state: false,
      },
      {
        txt: 'fix car',
        state: false,
      },
    ];
    localStorage.setItem('lsTask', JSON.stringify(arrtask));
    printList(arrtask);
  } else {
    arrtask = JSON.parse(localStorage.getItem('lsTask'));
    printList(arrtask);
  }
});

document.addEventListener('click', (e) => {
  if (e.target.matches('.tasks ul li input[type=\'text\']')) {
    arrtask = JSON.parse(localStorage.getItem('lsTask'));
    const imgOption = document.querySelectorAll('.tasks ul li img');
    const activeTask = document.getElementsByName('taskinlist');
    imgOption.forEach((img) => {
      if (img.id === e.target.id) {
        img.src = svgDelete;
        img.addEventListener('click', () => {
          arrtask = JSON.parse(localStorage.getItem('lsTask'));
          arrtask.splice(e.target.id, 1);
          localStorage.setItem('lsTask', JSON.stringify(arrtask));
          printList(JSON.parse(localStorage.getItem('lsTask')));
        });
      } else {
        img.src = svgMore;
      }
    });

    activeTask.forEach((element) => {
      element.addEventListener('keyup', (e) => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
          arrtask[e.target.id].txt = activeTask[e.target.id].value;
          localStorage.setItem('lsTask', JSON.stringify(arrtask));
        }
      });
    });
  } else {
    const imgOption = document.querySelectorAll('.tasks ul li img');
    imgOption.forEach((img) => {
      img.src = svgMore;
    });
  }
  if (e.target.matches('.tasks ul li input[type=\'checkbox\']')) {
    arrtask = JSON.parse(localStorage.getItem('lsTask'));
    const tasktached = document.getElementsByName('taskinlist');
    if (e.target.checked) {
      tasktached.forEach((task, index) => {
        if (task.id === e.target.id) {
          task.classList.add('tached');
          arrtask[index].state = true;
        }
      });
    } else {
      tasktached.forEach((task, index) => {
        if (task.id === e.target.id) {
          task.classList.remove('tached');
          arrtask[index].state = false;
        }
      });
    }
    localStorage.setItem('lsTask', JSON.stringify(arrtask));
  }
});
clearbtn.addEventListener('click', () => {
  arrtask = JSON.parse(localStorage.getItem('lsTask'));
  const result = arrtask.filter((e) => !e.state);
  arrtask = result;
  localStorage.setItem('lsTask', JSON.stringify(arrtask));
  printList(arrtask);
}); */