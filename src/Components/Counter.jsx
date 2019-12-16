import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

const Counter = ({ count, increment, decrement, reset }) => {
  return (
    <div>
      The count is {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default connect(state => state, actionCreators)(Counter);
