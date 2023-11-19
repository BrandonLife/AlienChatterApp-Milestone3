import React from 'react'
import './UserEdit.css'
function userEdit() {
  return (
    <div className='edit-container'>
    <form>
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
      <input id='bio' name='bio' type='text' required></input>
      </div>
      <div className='image'>
      <label htmlFor='image'>Image</label>
      <input id='image' name='image' type='text' required></input>
        </div>
        <div className='submit'>
        <input type='submit' value={"Update"}></input>
        </div>
    </form>
  </div>
  )
}

export default userEdit