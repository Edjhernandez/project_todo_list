// CSS file import
// import './styles.css';
// import photo from './Screenshot.png';
/* // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = photo; */

import catchInput from './catch.js';
import printList from './printList.js';

const inTask = document.querySelector('input');

document.addEventListener('keyup', (e) => {
  if ((e.code === 'Enter' || e.code === 'NumpadEnter') && (inTask.value)) {
    printList(catchInput());
  }
});
