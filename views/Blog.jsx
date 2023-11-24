const React = require("react");
const Default = require('./layouts/default')
const Protected = require('./layouts/protected')
function Blog({ posts, users, user }) {
    console.log(users)
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
        <div>
            {user ? (
             <Protected user= {user}>
             <div className="post-header-container">
                   <h1>Community Chatter</h1>      
             </div>
            {postsDisplay}  
             </Protected>
            ): (
                <Default>
                <div className="post-header-container">
                      <h1>Please Sign in</h1>      
                </div>
                </Default>     
        )}
   
    </div>
  )
}

module.exports = Blog