import React, { Component } from 'react';
import Ninjas from './ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 25, belt: 'green', id: 2 },
      { name: 'Crystal', age: 20, belt: 'red', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    console.log(ninja);
  }
  render() {

    return (
      <div className="App">-
          <h1>My first react app!</h1>
          <p>Welcome</p>
          <Ninjas ninjas={this.state.ninjas}/>
          <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
