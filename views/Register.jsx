const React = require("react");
const Default = require('./layouts/default')

function Register() {
return (
<Default>
    <div className='register-container'>
      <form action='/users/register' method='POST'>
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
</Default>
  )
}

module.exports = Register;