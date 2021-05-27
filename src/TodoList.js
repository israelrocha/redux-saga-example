import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TodoActions from './store/actions';

function TodoList({todos, requestTodoList}) {
    console.log(todos)
    return (
        <ul>
            {/* addTodo()  
                todos.map( todo => (
                <li key={todo.id}>{todo.text}</li>
            )) */
           
                todos.data.map( todo => (
                <li key={todo.id}>{todo.text}</li>
                ))
            
            }
            <button onClick={() => requestTodoList()}>Novo todo</button>
            { todos.loading && <p>Carregando...</p>}
        </ul>
    )
};

const mapStateToProps = state => {
        console.log('state', state.todos)
    
    return ({ todos: state.todos })
};

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
