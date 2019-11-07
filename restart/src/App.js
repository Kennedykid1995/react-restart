import React, { Component } from 'react';
import './App.css';
import TodoList from "./todolist/todo";
import TodoItem from './todoItem/todoItem';
import { Link } from "react-router-dom";
import KeyPadComponent from './Calculator/KeyPadComponents';
import ResultComponent from './Calculator/ResultComponent';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: { text: '', key: '' },
      result: ""
    }
  }
  inputElement = React.createRef();

  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem
    })
  }
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
    console.log("Hello Add Item")
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  //-calculator 

  onClick = button => {

    if (button === "=") {
      this.calculate()
    }

    else if (button === "C") {
      this.reset()
    }
    else if (button === "CE") {
      this.backspace()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };


  calculate = () => {
    var checkResult = ''
    if (this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    }

    else {
      checkResult = this.state.result
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <Link to="/" className="nav-item">Todo</Link>
          <Link to="/calculator" className="nav-item">Calculator</Link>
        </div>
        <div>
          <TodoList
            addItem={this.addItem}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
            inputElement={this.inputElement}
          />
          <TodoItem entries={this.state.items} deleteItem={this.deleteItem} />
        </div>
        <div>
          <h1>Simple Calculator</h1>
          <ResultComponent result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
