import React from 'react';
import ReactDOM from 'react-dom';
import Node from './Node';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Node />, div);
  ReactDOM.unmountComponentAtNode(div);
});