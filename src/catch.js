const inTask = document.querySelector('input');
const arrTasks = [];
const listBox = document.querySelector('.tasks');
const $ul = document.createElement('ul');

export default function catchInput() {
  document.addEventListener('keyup', (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      if (inTask.value) {
        arrTasks.push({
          textTask: inTask.value,
          state: false,
        });
        inTask.value = '';
      } else {
        return;
      }

      arrTasks.forEach((ii) => {
        const $li = document.createElement('li');
        const $span = document.createElement('span');
        const $checkB = document.createElement('input');
        $checkB.type = 'checkbox';
        $span.textContent = ii.textTask;
        $li.appendChild($checkB);
        $li.appendChild($span);
        $ul.appendChild($li);
        listBox.appendChild($ul);

        $checkB.onchange = () => {
          if ($checkB.checked) {
            $span.classList.add('tached');
          } else {
            $span.classList.remove('tached');
          }
        };
      });
    }
  });
}
