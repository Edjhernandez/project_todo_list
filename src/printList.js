// import svgMore from './assets/more_vert_FILL0_wght700_GRAD0_opsz24.svg';

export default function printList(arr) {
  const list = [];
  for (let ii = 0; ii < arr.length; ii += 1) {
    const $li = document.createElement('li');
    const $checkB = document.createElement('input');
    $checkB.type = 'checkbox';
    const $inputTask = document.createElement('input');
    $inputTask.type = 'text';
    $inputTask.value = arr[ii].txt;
    $inputTask.setAttribute('id', ii);
    const $imgMore = document.createElement('img');
    $imgMore.setAttribute('src', './assets/more_vert_FILL0_wght700_GRAD0_opsz24.svg');
    $imgMore.setAttribute('id', ii);
    // $imgMore.src = svgMore;
    $li.appendChild($checkB);
    $li.appendChild($inputTask);
    $li.appendChild($imgMore);
    list.push($li);
    $checkB.addEventListener('change', () => {
      if ($checkB.checked) {
        $inputTask.classList.add('tached');
        arr[ii].state = true;
        localStorage.setItem('lsTask', JSON.stringify(arr));
      } else {
        $inputTask.classList.remove('tached');
        arr[ii].state = false;
        localStorage.setItem('lsTask', JSON.stringify(arr));
      }
    });
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
