const React = require("react");
const Default = require('./layouts/default')
function Blog({ posts }) {
    const postsDisplay = posts.map((post) => {
        return (
            <div key={post._id} className="post-container">
            <div  className="post-display">
                <a href={`/posts/${post._id}`}><h1>{post.title}</h1></a>
                <span>Made at {post.dateMade} by {post.author}</span>
                <p>{post.comment}</p>
                </div>
            </div>
        )
    }) 
  return (
      <Default>
    <div className="post-header-container">
          <h1>Community Chatter</h1>      
    </div>
   
    {postsDisplay}  
   </Default>
  )
}

module.exports = Blog