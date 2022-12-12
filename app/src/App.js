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
  //3-2
//   render() {
//     return <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <p className="subtitle">draw rectingle.</p>
//         <Rect x="200" y="200" w="200" h="200" c="#6ff9" r="25" />
//         <Rect x="300" y="300" w="200" h="200" c="#f6f9" r="75" />
//         <Rect x="400" y="400" w="200" h="200" c="#6669" r="100" />
//       </div>
//     </div>
//   }
  //3-3

//   constructor(props) {
    // super(props);
    // this.state = {
    //   msg: 'Hello Component.',
    //   count: 0,
    // }
    // let timer =setInterval(() => {
    //   this.setState({
    //     count: this.state.count + 1,
    //     msg: "[count:" + this.state.count + "]"
    //   })
    // }, 1000);
//     this.state = {
//       counter: 0,
//       msg: 'count start!',
//       flg:true,
//     }
//     this.doAction = this.doAction.bind(this)
//   }

//   doAction(e) {
//     this.setState({
//       counter: this.state.counter + 1,
//       msg: this.state.counter,
//       flg: !this.state.flg,
//     })
//   }


//   render() {
//     return <div>
//       <h1 className='bg-primary text-white display-4'>React</h1>
//       <div className='container'>
//         <p className='subtitle'>Count number.</p>
//         {/* <div className='alert alert-primary text-center'>
//           <p className='alert alert-warning'>{this.state.msg}</p>
//           <p className='alert alert-dark'>{this.props.msg}</p>
//           <button className='btn btn-primary' onClick={this.doAction}>Click</button>
//         </div> */}
//         {this.state.flg ?
//           <div className='alert alert-primary text-end'>
//             <p className='h5'>Count:{this.state.msg}</p>
//           </div>
//           :
//           <div className='alert alert-warning text-start'>
//             <p className='h5'>{this.state.msg}です</p>
//           </div>
//         }
//         <div className='text-center'>
//           <button className='btn btn-primary' onClick={this.doAction}>Click</button>
//         </div>
//       </div>
//     </div>
//   }

//     data = []

//     area = {
//       width: "500px",
//       height: "500px",
//       border:"apx solid blue"
//     }

//   constructor(props) {
//     super(props)
//     this.state = {
//       list:this.data
//     }
//     this.doAction = this.doAction.bind(this)
//   }
//   doAction(e) {
//     let x = e.pageX
//     let y = e.pageY
//     this.data.push({ x: x, y: y })
//     this.setState({
//       list:this.data
//     })
//   }
//   draw(d) {
//     let s = {
//       position: "absolute",
//       left: (d.x - 25) + "px",
//       top: (d.y - 25) + "px",
//       width: "50px",
//       height: "50px",
//       backgroundColor:"#66f3",
//     }
//     return <div style={s}></div>
//   }
//   render() {
//     return <div>
//       <h1 className='bg-primary text-white display-4'>React</h1>
//       <div className='container'>
//         <p className='subtitle'>draw rectangle.</p>
//         <div style={this.area} onClick={this.doAction}>
//           {this.data.map((value) => this.draw(value))}
//         </div>
//       </div>
//     </div>
//   }
  data = [
    "This is list sample.",
    "これはリストのサンプルです",
    "配列をリストに変換します",
  ]

  constructor(props) {
    super(props)
    this.state = {
      list: this.data
    }
  }

  render() {
    return <div>
      <h1 className='bg-primary text-white display-4'>React</h1>
      <div className='container'>
        <p className='subtitle'>Show List.</p>
        <List title="サンプル・リスト" data={this.data} />
      </div>
    </div>
  }
}

class List extends Component {
  number = 1

  render() {
    let data = this.props.data;
    return <div>
      <p className='h5 text-center'>{this.props.title}</p>
      <ul className='list-group'>
        {data.map((item, key) =>
          <li className='list-group-item' key={key}>
            <Item number={key + 1} value={item} />
        </li>
        )}
      </ul>
    </div>
  }
}

class Item extends Component {
  item = {
    fontSize: "16pt",
    color: "#00f",
    textDecoration: "underline",
    textDecorationColor: "#ddf"
  }
  num = {
    fontWeight: "bold",
    color: "red"
  }

  render() {
    return (
      <p style={this.item}>
        <span style={this.num}>
          [{this.props.number}]&nbsp;
        </span>
        {this.props.value}
      </p>
    )
  }
}

export default App
