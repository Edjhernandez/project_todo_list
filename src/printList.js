import svgMore from './assets/more_vert_FILL0_wght700_GRAD0_opsz24.svg';

export default function printList(arr) {
  const list = [];
  for (let ii = 0; ii < arr.length; ii += 1) {
    const $li = document.createElement('li');
    $li.setAttribute('id', ii);
    const $checkB = document.createElement('input');
    $checkB.type = 'checkbox';
    $checkB.setAttribute('id', ii);
    $checkB.setAttribute('name', 'checkblist');
    const $inputTask = document.createElement('input');
    $inputTask.type = 'text';
    $inputTask.value = arr[ii].txt;
    $inputTask.setAttribute('id', ii);
    $inputTask.setAttribute('name', 'taskinlist');

    if (arr[ii].state) {
      $checkB.checked = true;
      $inputTask.classList.add('tached');
    } else {
      $checkB.checked = false;
      $inputTask.classList.remove('tached');
    }

    const $imgMore = document.createElement('img');
    $imgMore.setAttribute('id', ii);
    $imgMore.src = svgMore;
    $li.appendChild($checkB);
    $li.appendChild($inputTask);
    $li.appendChild($imgMore);
    list.push($li);
  }
  const $ul = document.createElement('ul');
  const $exitList = document.querySelector('.tasks');
  $exitList.innerHTML = '';
  list.forEach((e) => {
    $ul.appendChild(e);
  });
  $exitList.appendChild($ul);
  return $exitList;
}
