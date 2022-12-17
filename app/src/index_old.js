import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//react18以降は↓の書き方
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 3-2 */}
    {/* <App msg="Hello App."/> */}
    {/* 3-3 */}
    {/* <App msg="Hello App."/> */}
    <App />
  </React.StrictMode>
);

//react17以前は↓の書き方(本ではこっち)
// ReactDOM.render(
//   <React.StrictMode>
//     <App title="App" message="This is App Component" />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
