import React from "react";
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"

class TodoItem extends React.Component {
    state = {
        editing: false,
    }
    handleEditing = () => {
        this.setState({
            editing: true,
        })
    }
    handleUpdatedDone = event => {
        if (event.key === "Enter") {
            this.setState({ editing: false })
        }
    }
    componentWillUnmount() {
        console.log("cleaning up.......")
    }
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }
        const {completed, id, title } = this.props.todo

        let viewMode = {}
        let editiMode = {}

        if (this.state.editing) {
            viewMode.display = "none"
        } else {
            editiMode.display = "none"
        }
        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input
                        className={styles.checkbox}
                        type="checkbox"
                        checked={completed}
                        onChange={() => this.props.handleChangeProps(id)}
                    />
                    <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}><FaTrash style={{ color: "orangered", fontSize: "16px"}} /> </button>
                    <span style={completed ? completedStyle : null}>
                        {title}
                    </span>
                </div>
                <input type="text" style={editiMode} className={styles.textInput} value={title} onChange={e => { this.props.setUpdate(e.target.value, id)}} onKeyDown={this.handleUpdatedDone} />
            </li>
        )
    }
}

export default TodoItem