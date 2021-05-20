import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WorkerMain from './WorkerMain';
const Ele = React.createElement(
  'h1',
  {className: 'header'},
  'hello world'
)
// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   Ele,
//   document.getElementById('root')
// );

ReactDOM.render(
  <WorkerMain/>,
  document.getElementById('root')
);
reportWebVitals();
