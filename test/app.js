let time;
console.time(time);
const root = document.querySelector('#root');
let state = ['item1', 'item2', 'item3', 'item4'];

const render = root => {
  const items = state;
  root.innerHTML = `
    <ul>
      ${items.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <button id="append">추가</button>
  `;
  document.querySelector('#append').addEventListener('click', () => {
    state = [...state, `item${items.length + 1}`];
    render(root);
  });
};

render(root);
console.timeEnd(time);
