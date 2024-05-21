let questions = [
    {
      text: 'Дата начала СВО?',
      variants: ['гойда', '24 февраля', '2022'],
      right: 0
    },
    {
      text: 'Кто лучший певец России?',
      variants: ['Лепс', 'Шаман', 'Киркоров'],
      right: 1
    },
    {
      text: 'Сколько будет 7 + 8 + 0?',
      variants: ['1488', 'СВО', '15'],
      right: 1
    }
];

let html = '';

  questions.forEach((question, index) => {
    html += `<div>
      <p>${question.text}</p>
      ${question.variants.map((variant, i) => `
        <label>
          <input type="radio" name="question${index}" value="${i}">
          ${variant}
        </label>
      `).join('')}
    </div>`;
  });

  document.getElementById('test').innerHTML = html;

  document.getElementById('button').addEventListener('click', function() {
    let answers = questions.map(question => question.right);
    const questionsDivs = document.querySelectorAll('#test > div');
    questionsDivs.forEach((questionDiv, index) => {
      const inputs = questionDiv.querySelectorAll('input[type="radio"]');
      inputs.forEach((input, i) => {
        if (input.checked) {
          if (i === answers[index]) {
            input.parentElement.classList.add('right');
          } else {
            input.parentElement.classList.add('wrong');
          }
        }
      });
    });
  });