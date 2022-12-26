import React from 'react'
import './HomePage.css'

const HomePage = () => {
  return (
    <div>
      <div className="login-page">
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            
          </form>
          <form className="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button style={{margin :"5px"}} ><a href="/admin" style={{color :"white"}}>Admin login </a></button>
            
            <button style={{margin :"5px"}}><a href="/newuser" style={{color :"white"}}>User login</a></button>
            <p className="message">
              Not registered? <a href="/newuser">New USer</a>
            </p>
          </form>
        </div>
      </div>
    
    </div>
  )
}

export default HomePage
