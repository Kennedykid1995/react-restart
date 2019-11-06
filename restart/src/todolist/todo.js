import React, { Component } from 'react';

class TodoList extends Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }
    render() {
        return (
            <div className="todo-box">
                <form onSubmit={this.props.addItem}>
                    <input 
                    placeholder="todo item"
                    ref={this.props.inputElement}
                    value={this.props.currentItem.text}
                    onChange={this.props.handleInput}
                    />
                    <button type="submit">add</button>
                </form>
            </div>
        )
    }
}
export default TodoList; 