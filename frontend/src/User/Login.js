import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className='login-container'>
      <form>
        <h1>Login</h1>
      <div className='username'>
        <label htmlFor='username'>Username</label>
        <input id='username' name='username' type='text' required></input>
        </div>
        <div className='password'>
        <label htmlFor='password'>Password</label>
        <input id='password' name='password' type='text' required></input>
        </div>
        <div className='submit'>
        <input type='submit' value={"Sign In"}></input>
        </div>
      </form>
    </div>
  )
}

export default Login