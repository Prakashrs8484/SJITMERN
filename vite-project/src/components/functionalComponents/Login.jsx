import React from 'react'
import '../css/Login.css'
const Login = () => {
  return (
    <div className='login'>
      <form action="">
        <div className="email">
        <label htmlFor="">Email:</label>
        <input type="text" />
        </div>
        <div className='password'>
        <label htmlFor="">Password:</label>
        <input type="password" />
        </div>

        <div>
          Create an account? <a href="/signup">Sign Up</a>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
