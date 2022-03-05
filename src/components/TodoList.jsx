import React from 'react'
import TodoItem from './TodoItem'
import { useSelector} from 'react-redux'
import { Pagination } from './Pagination';
import {useState} from 'react'

function TodoList() {
    
    let todos = useSelector(state => state);
    
    const [currentPage, setCurrentPage] = useState(1)
    const [todosPerPage] = useState(10)  

    const indexOfLastTodo = currentPage * todosPerPage
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo)
    
    const paginate = pageNumber => setCurrentPage(pageNumber)
    
    return (
        <div>
            <Pagination
                todosPerPage={todosPerPage} 
                totalTodos={todos.length} 
                paginate={paginate}
            />
            {currentTodos.map((todo, i)=>   {
                return <TodoItem key={i} todo={todo}/>;
            })}

            
        </div>
    )
}

export default TodoList
