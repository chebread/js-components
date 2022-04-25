const root = document.querySelector('#root');
let state = ['item1', 'item2', 'item3', 'item4'];

const render = () => {
  const items = state;
  root.innerHTML = `
    <ul>
      ${items.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <button id="append">Append item</button>
  `;
  document.querySelector('#appen').addEventListener('click', () => {
    setState([`item${items.length + 1}`]);
  });
};

const setState = a => {
  state = [...state, ...a];
  render();
};

render();
