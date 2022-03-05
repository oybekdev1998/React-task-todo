import React from 'react'

export const Pagination = ({todosPerPage, totalTodos, paginate}) => {

  const pageNumbers = []

  for(let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className='pagination justify-content-center'>
        {
          pageNumbers.map(number => (
            <li key={number} className="page-item">
              <p onClick={() => paginate(number)} className="page-link"> 
                {number}
              </p>
            </li>
          ))
        }
      </ul>
    </nav>
    
  )
}
