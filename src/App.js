import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

const INCREMENT = 'INCREMENT';
function increment() {
  return { type: INCREMENT };
}

function counter(state = { count: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const store = createStore(counter);
function Parent() {
  return (
    <Provider store={store}>
      <div>
        <h1>Count: <Counter /></h1>
        <Child />
      </div>
    </Provider>
  );
}

function Counter() {
  const count = useSelector(state => state.count);
  return (
    <span>{count}</span>
  );
}

function Child() {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment);
  }
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
export default INCREMENT;