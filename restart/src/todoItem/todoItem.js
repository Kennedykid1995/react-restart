import React, {Component} from 'react'; 

class TodoItem extends Component {
    createTasks(item){
        return <li key={item.key}>{item.text}</li>
    }
}