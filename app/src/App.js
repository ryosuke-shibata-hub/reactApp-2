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
import React, { useState } from 'react';
import { Component } from "react"
import './App.css'
import Rect from './Rect'
// class App extends Component {
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
//   data = [
//     "This is list sample.",
//     "これはリストのサンプルです",
//     "配列をリストに変換します",
//   ]

//   constructor(props) {
//     super(props)
//     this.state = {
//       list: this.data
//     }
//   }

//   render() {
//     return <div>
//       <h1 className='bg-primary text-white display-4'>React</h1>
//       <div className='container'>
//         <p className='subtitle'>Show List.</p>
//         <List title="サンプル・リスト" data={this.data} />
//       </div>
//     </div>
//   }
// }

// class List extends Component {
//   number = 1

//   render() {
//     let data = this.props.data;
//     return <div>
//       <p className='h5 text-center'>{this.props.title}</p>
//       <ul className='list-group'>
//         {data.map((item, key) =>
//           <li className='list-group-item' key={key}>
//             <Item number={key + 1} value={item} />
//         </li>
//         )}
//       </ul>
//     </div>
//   }
// }

// class Item extends Component {
//   item = {
//     fontSize: "16pt",
//     color: "#00f",
//     textDecoration: "underline",
//     textDecorationColor: "#ddf"
//   }
//   num = {
//     fontWeight: "bold",
//     color: "red"
//   }

//   render() {
//     return (
//       <p style={this.item}>
//         <span style={this.num}>
//           [{this.props.number}]&nbsp;
//         </span>
//         {this.props.value}
//       </p>
//     )
//   }

//3-4-25
//   input = '';
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return <div>
//       <h1 className='bg-primary text-white display-4'>React</h1>
//       <div className='container'>
//         <Message title="Children!">
//           これはコンポーネント内のコンテンツです。
//           マルでテキストを分割し、リストにして表示します。
//           改行は必要ありますせん。
//         </Message>
//       </div>
//     </div>
//   }
// }

// class Message extends Component {
//   li = {
//     fontSize: "14pt",
//     fontWeight: "bold",
//     color: "#090"
//   }

//   render() {
//     let content = this.props.children
//     let arr = content.split('。')
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].trim() != '') {
//         arr2.push(arr[i]);
//       }
//     }
//     let list = arr2.map((value, key) => (
//       <li className='list-group-item' style={this.li} key={key}>
//         {key + 1}. {value}.
//       </li>
//     ))

//     return <div>
//       <h2>{this.props.title}</h2>
//       <ol className='list-group'>{list}</ol>
//     </div>
//   }
  //3-4-26
//   input = '';

//   constructor(props) {
//     super(props)
//     this.state = {
//       title: 'input from',
//       message: 'type your name.'
//     }
//     this.doChange = this.doChange.bind(this)
//     this.doSubmit = this.doSubmit.bind(this)
//   }

//   doChange(event) {
//     this.input = event.target.value;
//   }

//   doSubmit(event) {
//     this.setState({
//       title: 'send form',
//       message: 'Hello,' + this.input + '!!'
//     })
//     event.preventDefault()
//   }
//   render() {
//     return <div>
//       <h1 className='bg-primary text-white display-4'>React</h1>
//       <div className='container'>
//         <h4>{this.state.title}</h4>
//         <p className='card h5 p-3'>{this.state.message}</p>
//         <div className='alert alert-primary mt-3'>
//           <form onSubmit={this.doSubmit}>
//             <div className='form-group'>
//               <label>Message.</label>
//               <input type='text' className='form-control' onChange={this.doChange} required pattern='[A-Za-z _,.]+'/>
//             </div>
//             <input type='submit' className='btn btn-primary mt-3' value="Click" />
//           </form>
//         </div>
//       </div>
//     </div>
//   }
  //3-4-29
//   input = '';
//   constructor(props) {
//     super(props)
//     this.state = {
//       title: 'input form',
//       message: 'type your name',
//       max: 10,
//     }
//     this.doCheck = this.doCheck.bind(this)
//   }
//   doCheck(event) {
//     alert(event.target.value + "は長すぎます。(最大" + this.state.max + "文字で指定してください。)")
//   }

//   render() {
//     return <div>
//       <h1 className='bg-primary text-white display-4'>React</h1>
//       <div className='container'>
//         <h4>{this.state.title}</h4>
//         <Message maxlength={this.state.max} onCheck={this.doCheck} />
//       </div>
//     </div>
//   }
// }

// class Message extends Component {
//   li = {
//     fontSize: '14pt',
//     fontWeight: 'bold',
//     color: '#090',
//   }

//   constructor(props) {
//     super(props)
//     this.doChange = this.doChange.bind(this)
//   }

//   doChange(event) {
//     if (event.target.value.length > this.props.maxlength) {
//       this.props.onCheck(event)
//       event.target.value =
//       event.target.value.substr(0, this.props.maxlength)
//     }
//   }

//   render() {
//     return <div className='form-group'>
//       <label>input:</label>
//       <input type='text' className='form-control' onChange={this.doChange} />
//     </div>
//   }

// }
//3-4-30,31
// let data = {
//   title: 'React-Context',
//   message: 'this is sample message'
// }
// const SampleContext = React.createContext(data)

// class AppApp extends Component {
//   newdata = {
//     title: '新しいタイトル',
//     message:'これは新しいメッサー時',
//   }
//   render() {
//     return <div>
//       <h1 className='bg-primary text-white display-4'>React</h1>
//       <div className='container'>
//         <Title />
//         <Message />
//         <hr />
//         <SampleContext.Provider value={this.newdata}>
//           <Title />
//           <Message />
//         </SampleContext.Provider>
//         <hr />
//         <Title />
//         <Message />
//       </div>
//     </div>
//   }
// }

// class Title extends Component {
//   static contextType = SampleContext

//   render() {
//     return (<div className='card p-2 my-3'>
//       <h2>{this.context.title}</h2>
//     </div>
//     )
//   }
// }

// class Message extends Component {
//   static contextType = SampleContext

//   render() {
//     return (
//       <div className='alert alert-primary'>
//         <p>{this.context.message}</p>
//       </div>
//     )
//   }
// }

//3-4-32

// let theme = {
//   light: {
//     style: {
//       backgroundColor: '#f0f9ff',
//       color: '#00f'
//     },
//     head: 'bg-primary text-white display-4 mb-4',
//     alert: 'alert alert-primary my-3',
//     text: 'text-primary m-3',
//     foot: 'py-4',
//   },
//   dark: {
//     style: {
//       backgroundColor: '#336',
//       color: '#eef',
//     },
//     head: 'bg-secoundary text-white display-4 mb-4',
//     alert: 'a;ert alert-dark my-3',
//     text: 'text-light m-3',
//     foot: 'py-4',
//   }
// }

// const ThemeContext = React.createContext(theme.light)

// class light extends Component{
//   static contextType = ThemeContext

//   render() {
//     return <div style={this.context.style}>
//       <h1 className={this.context.head}>React</h1>
//       <div className='container'>
//         <Title value="Content Page" />
//         <Message value="※これはテーマのサンプルです。" />
//         <div className={this.context.foot}></div>
//       </div>
//     </div>
//   }
// }

// class Title extends Component {
//   static contextType = ThemeContext

//   render() {
//     return (
//       <div className={this.context.alert}>
//         <h2 style={this.context.style}>{this.props.value}</h2>
//       </div>
//     )
//   }
// }

// class Message extends Component {
//   static contextType = ThemeContext

//   render() {
//     return (
//       <div style={this.context.style}>
//         <p className={this.context.text}>{this.props.value}</p>
//       </div>
//     )
//   }
// }

//4-1,4-2
// function App() {
  // const [message] = useState("welcome to Hooks!")

  // return (
  //   <div>
  //     <h1 className='bg-primary text-white display-4'>React</h1>
  //     <div className='container'>
  //       <h4 className='my-3'>Hooks sample</h4>
  //       <div className='alert alert-primary text-center'>
  //         <p className='h5'>{message}.</p>
  //       </div>
  //     </div>
  //   </div>
  // )
//   const [count, setCount] = useState(0)
//   const clickFunc = () => {
//     setCount(count + 1)
//   }

//   return (
//     <div>
//       <h1 className='bg-primary text-white display-4'>React</h1>
//       <div className='container'>
//         <h4 className='my-3'>Hook Sample</h4>
//         <div className='alert alert-primary text-center'>
//           <p className='h5 mb3'>click: {count} times!</p>
//           <div>
//             <button className='btn btn-primary' onClick={clickFunc}>Click me</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

//4-3
// function App() {
//   const [count, setCount] = useState(0)
//   const [flg, setFlg] = useState(false)
//   const clickFunc = () => {
//     setCount(count + 1)
//   }
//   const changeFlag = (e) => {
//     setFlg(e.target.checked)
//   }

//   return (
//     <div>
//       <h1 className='bg-primary text-white display-4'>React</h1>
//       <div className='container'>
//         <h4 className='my-3'>Hooks sample</h4>
//         {flg ?
//           <div className='alert alert-primary text-center'>
//             <p className='h5 mb-3'>click: {count} times!</p>
//             <div>
//               <button className='btn btn-primary' onClick={clickFunc}>Click me</button>
//             </div>
//           </div>
//           :
//           <div className='card p-3 border-primary text-center'>
//             <p className='h5 mb-3 text-left text-primary'>
//               click: {count} times!
//             </p>
//             <div>
//               <button className='btn btn-primary' onClick={clickFunc}>Click me</button>
//             </div>
//           </div>
//         }
//         <div className='form-group h6 text-center pt-3'>
//           <input type='checkbox' className='form-check-input' id='check1' onChange={changeFlag} />
//           <label className='form-check-label' htmlFor="check1">Change form style</label>
//         </div>
//       </div>
//     </div>
//   )
// }

//4-4,4-5,4-6,4-7
function AlertMessage(props) {
  const data = ["Hello!", "Welcome...", "Good-bye?"]

  const actionAlert = () => {
    const re = data[Math.floor(Math.random() * data.length)]
    props.setAlert('message: "' + re + '" . ')
  }

  return <div className='alert alert-primary h5 text-primary'>
    <h5>{props.alert}</h5>
    <button onClick={actionAlert} className="btn btn-primary">Click me</button>
  </div>
}

function CardMessage(props) {
  const [count, setCount] = useState(0)

  const actionCard = () => {
    setCount(count + 1)
    props.setCard("card counter: " + count + "count.")
  }
  return <div className='card p-3 h5 border-dark text-center'>
    <h5>{props.card}</h5>
    <button onClick={actionCard} className="btn btn-secondary">Click me</button>
  </div>
}

function App() {
  // const [msg, setMsg] = useState("This is sample message")
  const [alert, setAlert] = useState("This is alert message")
  const [card, setCard] = useState("This is card message!")

  // const doAction = () => {
  //   let res = window.prompt('type your name:')
  //   setMsg("Hello, " + res + "!!")
  // }
  return (
    <div>
      <h1 className='bg-primary text-white display-4'>React</h1>
      <div className='container'>
        <h4 className='my-3'>Hooks sample</h4>
        {/* <AlertMessage message={msg} />
        <CardMessage message={msg} /> */}
        <AlertMessage alert={alert} setAlert={setAlert} />
        <CardMessage card={card} setCard={setCard} />
        <hr />
        <div className='text-right'>
          <p>{alert}</p>
          <p>{card}</p>
        </div>
        {/* <div className='text-center'>
          <button onClick={doAction} className="btn btn-primary">Clickme</button>
        </div> */}
      </div>
    </div>
  )
}

export default App
