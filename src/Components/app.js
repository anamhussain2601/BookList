import React, { Component } from 'react';
import BookList from '../containers/book-list';
import '../App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

export default class App extends Component{
  render(){
    return(
      <div>
      <BookList/>
      </div>
    );
  }
}