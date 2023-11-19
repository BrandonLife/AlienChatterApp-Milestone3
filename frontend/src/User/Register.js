import React from 'react'
import './Register.css'
function Register() {
  return (
    <div className='register-container'>
      <form>
        <h1>Register</h1>
        <div className='username'>
        <label htmlFor='username'>Username</label>
        <input id='username' name='username' type='text' required></input>
        </div>
        <div className='password'>
        <label htmlFor='password'>Password</label>
        <input id='password' name='password' type='text' required></input>
        </div>
        <div className='bio'>
        <label htmlFor='bio'>Bio</label>
        <textarea id='bio' name='bio' type='text' required></textarea>
        </div>
        <div className='image'>
        <label htmlFor='image'>Image</label>
        <input id='image' name='image' type='text' required></input>
        </div>
        <div className='submit'>
        <input type='submit' value={"Create Account"}></input>
        </div>
        </form>
    </div>
  )
}

export default Register