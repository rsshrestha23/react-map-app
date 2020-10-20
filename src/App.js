import React, { Component } from 'react';
import './App.css'


class App extends Component {


  state = {
    items: [
      {
        id: 1,
        name: "Ram",
        address: "Ktm",
        phoneNo: '123',
        age: 10
      },
      {
        id: 2,
        name: "Shyam",
        address: "Pokhara",
        phoneNo: '9876',
        age: 20
      },
      {
        id: 3,
        name: "Hari",
        address: "Chitwan",
        phoneNo: '55205',
        age: 50
      }
    ]
  }


  render() {
    let displayData = this.state.items.map((item) => {
      let { id, name, address, phoneNo, age } = item;
      return (
        <div key={id}>
          <h1>Name:{name}</h1>
          <h1>address:{address}</h1>
        </div>
      )
    })

    return (
      <div className="App">
        <h1>React Map Example</h1>
        {displayData}
      </div>
    )
  }
}


export default App;
