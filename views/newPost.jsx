const React = require("react");
const Default = require('./layouts/default')
const Protected = require('./layouts/protected')
//Current date object info From google search how to get the current date in javascript
let today = new Date()
let day = String(today.getDate()).padStart(2, '0')
let month = String(today.getMonth()+1).padStart(2, '0')
let fullYear = today.getFullYear()

//how to get current time in javascript from Google search
let time = new Date()
let currentTime = time.getHours() + ':' + time.getMinutes() + ":" + time.getSeconds()

today= `${currentTime} on ${month}/${day}/${fullYear} `
function newPost({ user }) {
  return (
    <div>
       {/* Ternary operator approach for rendering views comes from ChatGPT */}
      {user ? (
        <Protected user= {user}>
        <div className="add-post-form-container">
          <form action={`/posts/${user}`} method='POST'>
            <h1>Add Post</h1>
          <div className='form-group newInput'>
          < label htmlFor= 'title'>Title</label><br></br>
          <input type='text' id='title' name='title' placeholder="Ex: They are here" />
          </div>
          <div className='form-group newInput'>
          < label htmlFor= 'author'>Author</label><br></br>
          <input type='text' id='author' name='author' value={user} />
          </div>
          <div className='form-group newInput'>
          < label htmlFor= 'image'>Image</label><br></br>
          <input type='text' id='image' name='image' />
          </div>
          <div className='form-group newInput'>
          < label htmlFor= 'description'>Description</label><br></br>
          <textarea type='text' id='description' placeholder="Ex: We fight for another day" name='description' />
          </div>
          <div className='form-group newInput'>
          < label htmlFor= 'subject'>Subject</label><br></br>
          <input type='text' id='subject' placeholder="Ex: Aliens" name='subject' />
          </div>
          <div className='form-group newInput'>
          < label htmlFor= 'dateMade'>DateMade</label><br></br>
          <input type='text' id='dateMade' name='dateMade' value={today} />
              </div>
         <input type='submit'></input>
        </form>
        </div>
              </Protected>
      ) : (
          <Default>
            <h1>Please sign in</h1>
          </Default>
      )}

      </div>
    )
}
  
module.exports =newPost