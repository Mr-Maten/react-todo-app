import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    
    getStyle = () => {

        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    

   

    render() {
        const { id, title} = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)}/> {' '}{title}
                    {' '}
                    <button className = "btn"  onClick={this.props.onDelete.bind(this, id)}>Delete</button>
                </p>
            </div>
        );
    }
}

TodoItem.propTypes = {

    todo: PropTypes.object.isRequired
}

export default TodoItem;