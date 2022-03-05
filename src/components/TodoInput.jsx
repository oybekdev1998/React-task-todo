import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import {v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';

function TodoInput() {
    let [title, setTitle] = useState();
    let dispatch = useDispatch();
    return (
        <div>
            <div className="input-group mb-3">
                <input
                    className="form-control"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    type="text"/>
                <button
                
                onClick={()=>{
                       dispatch(  addTodo({
                        id: uuid(),
                        title: title
                    }));
                        setTitle('');
                    }}
                className="btn btn-success mx-2">Add</button>
            </div>
        </div>
    )
}

export default TodoInput
