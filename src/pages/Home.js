import React from 'react'
import Logo from './todo-logo.png'

export const Home = () => {
  return (
    <div classNAme="card mb-3" style={{maxWidth: '540px'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={Logo} class="img-fluid rounded-start" alt='Logo' />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Todolist App</h5>
            <p class="card-text">Это приложение Todo было разработано Ойбеком.</p>
          </div>
        </div>
      </div>
    </div>
  )
}