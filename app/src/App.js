// import logo from './logo.svg';
// import './App.css';
// import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { Component } from "react"
import './App.css'
import Rect from './Rect'
class App extends Component {
//   constructor(props) {
//     super()
//     this.title = props.title
//     this.message = props.message
//   }
  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <p className="subtitle">draw rectingle.</p>
        <Rect x="200" y="200" w="200" h="200" c="#6ff9" r="25" />
        <Rect x="300" y="300" w="200" h="200" c="#f6f9" r="75" />
        <Rect x="400" y="400" w="200" h="200" c="#6669" r="100" />
      </div>
    </div>
  }
}

export default App
