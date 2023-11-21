const React = require("react");
const Default = require('./layouts/default')
function Blog({ posts }) {
    const postsDisplay = posts.map((post) => {
        return (
            <div key={post._id} className="post-display">
                <a href={`/posts/${post._id}`}><h1>{post.title}</h1></a>
                <span>Made on {post.dateMade} by {post.author}</span>
                <p>{post.comment}</p>
            </div>
        )
    }) 
  return (
    <Default>
    {postsDisplay}  
   </Default>
  )
}

module.exports = Blog