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
        <input id='username' name='username' type='text' autoFocus placeholder="Ex: JOHN" required></input>
        </div>
        <div className='password'>
        <label htmlFor='password'>Password</label>
        <input id='password' name='password' type='text' placeholder="Ex: 1234 " required></input>
        </div>
        <div className='bio'>
        <label htmlFor='bio'>Bio</label>
        <textarea id='bio' name='bio' type='text' placeholder="Ex: For he served with dignity and duty" required></textarea>
        </div>
        <div className='image'>
        <label htmlFor='image'>Image</label>
        <input id='image' name='image' type='text' placeholder="Ex: picture.jpg" required></input>
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