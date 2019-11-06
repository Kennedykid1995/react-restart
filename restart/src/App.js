import React, {Component} from 'react';
import './App.css';
import TodoList from "./todolist/todo"; 

class App extends Component {
  constructor(){
    super()
    this.state = {
      items: [],
      currentItem: {text: '', key:''},
    }
  }
  handleInput= e => {
    const itemText = e.target.value;
    const currentItem = {text: itemText, key: Date.now()}
    this.setState({
      currentItem
    })
  }
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem
    if(newItem.text !== ""){
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: {text:'', key:''},
      })
    }
    console.log("Hello Add Item")
  }
  render(){
    return (
      <div className="App">
        <div className="nav-bar">
          <a className="nav-item">Todo</a>
          <a className="nav-item">Calculator</a>
        </div>
        <div>
          <TodoList 
          addItem={this.addItem}
          handleInput = {this.handleInput}
          currentItem = {this.state.currentItem}
          inputElement = {this.inputElement}
          />
        </div>
      </div>
    );
  }
}

export default App;
