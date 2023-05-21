// import './styles.css';
// import catchInput from './catch.js';
import printList from './printList.js';

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
    printList(JSON.parse(localStorage.getItem('lsTask')));
  }
  printList(JSON.parse(localStorage.getItem('lsTask')));
});

document.addEventListener('click', (e) => {
  if (e.target.matches('.tasks ul li input[type=\'text\']')) {
    // arrtask = JSON.parse(localStorage.getItem('lsTask'))
    const imgOption = document.querySelectorAll('.tasks ul li img');
    imgOption.forEach((img) => {
      if (img.id === e.target.id) {
        img.setAttribute('src', './assets/delete_FILL0_wght700_GRAD0_opsz40.svg');
      } else {
        img.setAttribute('src', './assets/more_vert_FILL0_wght700_GRAD0_opsz24.svg');
      }
    });
    // imgOption.setAttribute('src', './assets/delete_FILL0_wght400_GRAD0_opsz48.svg');
    // console.log('entro');
    // console.log(e.target.id);
  } else {
    const imgOption = document.querySelectorAll('.tasks ul li img');
    imgOption.forEach((img) => {
      img.setAttribute('src', './assets/more_vert_FILL0_wght700_GRAD0_opsz24.svg');
    });
  }
});

clearbtn.addEventListener('click', () => {
  arrtask = JSON.parse(localStorage.getItem('lsTask'));
  arrtask.forEach((element, index) => {
    if (element.state) {
      arrtask.splice(index, 1);
    }
  });

  localStorage.setItem('lsTask', JSON.stringify(arrtask));
  printList(JSON.parse(localStorage.getItem('lsTask')));
});