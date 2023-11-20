import React, { useState } from 'react'
import './Register.css'
function Register() {
  const [username, SetUsername] = useState('')
  const [password, SetPassword] = useState('')
  const [bio, SetBio] = useState('')
  const [image, SetImage] = useState('')
  console.log(username, password, bio, image)

  const body = {username: username, password: password, bio:bio, image: image}

  const submitHandler = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/users/register', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type':'application/json',
        " Access-Control-Allow-Origin":"*",
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json)
    .then(data=> data)
    

}

  return (
    <div className='register-container'>
      <form onSubmit={submitHandler}>
        <h1>Register</h1>
        <div className='username'>
        <label htmlFor='username'>Username</label>
        <input onChange={(e)=> SetUsername(e.target.value)} id='username' name='username' type='text' required></input>
        </div>
        <div className='password'>
        <label htmlFor='password'>Password</label>
        <input onChange={(e)=> SetPassword(e.target.value)} id='password' name='password' type='text' required></input>
        </div>
        <div className='bio'>
        <label htmlFor='bio'>Bio</label>
        <textarea onChange={(e)=> SetBio(e.target.value)} id='bio' name='bio' type='text' required></textarea>
        </div>
        <div className='image'>
        <label htmlFor='image'>Image</label>
        <input onChange={(e)=> SetImage(e.target.value)} id='image' name='image' type='text' required></input>
        </div>
        <div className='submit'>
        <input type='submit' value={"Create Account"}></input>
        </div>
        </form>
    </div>
  )
}

export default Register