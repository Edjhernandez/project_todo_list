export default function printList(arr) {
  const list = [];
  for (let ii = 0; ii < arr.length; ii += 1) {
    const $li = document.createElement('li');
    const $span = document.createElement('input');
    $span.type = 'text';
    const $checkB = document.createElement('input');
    $checkB.type = 'checkbox';
    $span.value = arr[ii].textTask;
    $li.appendChild($checkB);
    $li.appendChild($span);
    list.push($li);
    $checkB.onchange = () => {
      if ($checkB.checked) {
        $span.classList.add('tached');
      } else {
        $span.classList.remove('tached');
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
