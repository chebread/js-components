const react = () => {
  const render = f => {
    f();
  };
  const options = {
    currentStateKey: 0,
    states: [],
  };
  function useState(initState) {
    if (options.states.length === options.currentStateKey)
      options.states.push(initState);

    const state = options.states[options.currentStateKey];
    const setState = newState => {
      options.states[options.currentStateKey] = newState;
      render();
    };
    options.currentStateKey += 1;
    return [state, setState];
  }
  return [render, useState];
};

const root = document.querySelector('#root');
const app = () => {
  const render = react();
  render = () => {
    home(); // 기억해야 한다!!!!
  };
};
app();

const home = () => {
  const [state, setState] = useState(1); //  그래야 이게 작동함;
  root.innerHTML = `
    <ul>
      ${state.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <button id="append">Append item</button>
    <ul>
      ${value.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <button id="append2">Append item</button>
  `;
};

// const options = {
//   currentStateKey: 0,
//   states: [],
// };

// const react = () => {
//   function useState(initState) {
//     if (options.states.length === options.currentStateKey)
//       options.states.push(initState);

//     const state = options.states[options.currentStateKey];
//     const setState = newState => {
//       options.states[options.currentStateKey] = newState;
//       render();
//     };
//     options.currentStateKey += 1;
//     return [state, setState];
//   }
//   return useState;
// };

// // 이중 선언 왜 오류?
// const useState = react();
// const root = document.querySelector('#root');
// const app = () => {
//   // let state = ['item1', 'item2', 'item3', 'item4'];
//   const render = () => {
//     const [state, setState] = useState(['item1'], render);
//     const [value, setValue] = useState([1], render);
//     console.log(state, value);
//     root.innerHTML = `
//       <ul>
//         ${state.map(item => `<li>${item}</li>`).join('')}
//       </ul>
//       <button id="append">Append item</button>
//       <ul>
//         ${value.map(item => `<li>${item}</li>`).join('')}
//       </ul>
//       <button id="append2">Append item</button>
//     `;
//     document.querySelector('#append').addEventListener('click', e => {
//       setState([...state, `item${state.length + 1}`]);
//     });
//     document.querySelector('#append2').addEventListener('click', () => {
//       setValue([...value, [value.length + 1]]);
//     });
//   };
//   render();
// };
// app();
