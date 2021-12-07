import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Permission from './Permission';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Permission/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
