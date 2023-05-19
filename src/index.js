// import './styles.css';
import catchInput from './catch.js';
import printList from './printList.js';

const inTask = document.querySelector('input');

document.addEventListener('DOMContentLoaded', printList([
  {
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
]));

document.addEventListener('keyup', (e) => {
  if ((e.code === 'Enter' || e.code === 'NumpadEnter') && (inTask.value)) {
    printList(catchInput());
  }
});
//
/* document.addEventListener('click', (e) => {
  if(e.target.matches('.tasks ul li input[type=\'text\']')){
    //const x = document.querySelector('.task');
      //$imgMore.setAttribute('src','./assets/delete_FILL0_wght400_GRAD0_opsz48.svg');
    console.log(x);
  //x.setAttribute('src','./assets/delete_FILL0_wght400_GRAD0_opsz48.svg');
  }

  }); */
