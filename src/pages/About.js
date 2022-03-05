import React from 'react'
import TodoList from '../components/TodoList'
import TodoInput from '../components/TodoInput'
import { Pagination } from "../components/Pagination"

export const About = () => {
  return (
    <div>
      <TodoInput />
      <Pagination />
      <TodoList />
    </div>
  )
}
