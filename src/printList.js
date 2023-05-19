import svgMore from './assets/more_vert_FILL0_wght700_GRAD0_opsz24.svg';

export default function printList(arr) {
  const list = [];
  for (let ii = 0; ii < arr.length; ii += 1) {
    const $li = document.createElement('li');
    const $checkB = document.createElement('input');
    $checkB.type = 'checkbox';
    const $inputTask = document.createElement('input');
    $inputTask.type = 'text';
    $inputTask.value = arr[ii].textTask;
    const $imgMore = document.createElement('img');
    // $imgMore.setAttribute('src', './assets/more_vert_FILL0_wght700_GRAD0_opsz24.svg');
    $imgMore.src = svgMore;
    $li.appendChild($checkB);
    $li.appendChild($inputTask);
    $li.appendChild($imgMore);
    list.push($li);
    $checkB.onchange = () => {
      if ($checkB.checked) {
        $inputTask.classList.add('tached');
        arr[ii].state = true;
      } else {
        $inputTask.classList.remove('tached');
        arr[ii].state = false;
      }
    };
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
