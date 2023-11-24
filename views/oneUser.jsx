const React = require("react")
const Protected = require('./layouts/protected')
const Default = require('./layouts/default')
function oneUser({ user, oneUser, userId }) {
    console.log(user, oneUser, userId)
    const postsDisplay = user.posts.map((post) => {
        return (
        <div>
            <div className="specific-post-container">
                <div className="specific-post-title"> 
                    <h1>{ post.title}</h1>
                </div>
                <div className="specific-post-dateMade"> 
                    <span>Made on {post.dateMade} by {post.author }</span>
                </div>
                <div className="specific-post-image"> 
                  <img src={post.image}></img>
                </div>
                <div className="specific-post-subject"> 
                    <p>Subject: {post.subject }</p>
                </div>
                <div className="specific-post-description"> 
                    <p>{post.description }</p>
                </div>
                </div>  
         </div>
      )
  })  
    return (
        <div>
  
            {user ? (
                 <Protected oneUser={oneUser} userId={userId}>
                  {postsDisplay}
                    </Protected>    
                ) : (
                    <div>
                        <Default>
                        <h1>Please Sign in</h1>   
                        </Default>
                    </div>  
                   
    )}
   
        </div>
     
)

}

module.exports = oneUser