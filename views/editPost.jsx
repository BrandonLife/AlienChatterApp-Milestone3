const React = require("react");
const Default = require('./layouts/default')
// //Current date object info From google search how to get the current date in javascript
// let today = new Date()
// let day = String(today.getDate()).padStart(2, '0')
// let month = String(today.getMonth()+1).padStart(2, '0')
// let fullYear = today.getFullYear()

// //how to get current time in javascript from Google search
// let time = new Date()
// let currentTime = time.getHours() + ':' + time.getMinutes() + ":" + time.getSeconds()

// today= `${month}/${day}/${fullYear} at ${currentTime}`
function editPost({post}) {
    return (
<Default>
<div className="blog-form-container">
  <form action={`/posts/${post._id}?_method=PUT`} method='POST'>
    <h1>Add Comment</h1>
  <div className='form-group newInput'>
  < label htmlFor= 'title'>Title</label><br></br>
  <input type='text' id='title' name='title' value={post.title} />
  </div>
  <div className='form-group newInput'>
  < label htmlFor= 'author'>Author</label><br></br>
  <input type='text' id='author' name='author'  value={post.author} />
  </div>
  <div className='form-group newInput'>
  < label htmlFor= 'subject'>Subject</label><br></br>
  <input type='text' id='subject' name='subject'  value={post.subject} />
  </div>
  <div className='form-group newInput'>
  < label htmlFor= 'description'>Description</label><br></br>
  <textarea type='text' id='description' name='description'  value={post.description} />
  </div>
  <div className='form-group newInput'>
  < label htmlFor= 'image'>Image</label><br></br>
  <input type='text' id='image' name='image'  value={post.image} />
  </div>
  <div className='form-group newInput'>
  < label htmlFor= 'dateMade'>DateMade</label><br></br>
  <input type='text' id='dateMade' name='dateMade' value={post.dateMade} />
  </div>
 <input type='submit'></input>
</form>
</div>
  </Default>
    )
}
  
module.exports = editPost