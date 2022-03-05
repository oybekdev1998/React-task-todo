import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';


function TodoItem({ todo }) {
    const [editable, setEditable] = useState(false)
    const [title, setTitle] = useState(todo.title)
    let dispatch = useDispatch();
        
    

    return (
        <div>
            <div className="list-group mb-4">
                <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
                <div className="list-group-item">
                    {editable ?
                        <input type="text" className="form-control"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}

                        />
                        :
                        <h4>{todo.title}</h4>}
                </div>
                <button className="btn btn-danger m-2"
                    onClick={() => {
                        dispatch(updateTodo({
                            ...todo,
                            title: title
                        }))
                        if(editable) {
                         setTitle(todo.title);   
                        }
                        setEditable(!editable);
                      

                    }}
                >{editable?"Update":"Edit"}</button>
                <button className="btn btn-success m-2"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                >Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
