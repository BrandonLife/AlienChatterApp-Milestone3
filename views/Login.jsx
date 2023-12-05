const React = require("react");
const Default = require('./layouts/default')

function Login() {
    return (
    <Default> 
      <div className='login-container'>
        <form action="/users/login" method="POST">
          <h1>Login</h1>
        <div className='username'>
          <label htmlFor='username'>Username</label>
          <input id='username' name='username' type='text'placeholder="Enter Username" required></input>
          </div>
          <div className='password'>
          <label htmlFor='password'>Password</label>
          <input id='password' name='password' type='text' placeholder="Enter Password" required></input>
          </div>
          <div className='submit'>
          <input type='submit' value={"Sign In"}></input>
          </div>
        </form>
        </div>
    </Default> 
    )
}
  
module.exports = Login