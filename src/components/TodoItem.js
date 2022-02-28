import React from "react";

class TodoItem extends React.Component {
    render(){
        return(
            <li>
               <input type="checkbox" checked={this.props.todo.completed} onChange={() => this.props.handleChangeProps(this.props.todo.id)}/><button>Delete</button> {this.props.todo.title}
               </li>
            )

    }
}

export default TodoItem
