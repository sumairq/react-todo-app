import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    

    render(){
    const completedStyle = {
  fontStyle: "italic",
  color: "#595959",
  opacity: 0.4,
  textDecoration: "line-through",
}

        return (
            <ul>
        {this.props.todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} handleChangeProps={this.props.handleChangeProps} deleteTodoProps={this.props.deleteTodoProps} />
        ))}
      </ul>
            )
        }
}

export default TodoList
