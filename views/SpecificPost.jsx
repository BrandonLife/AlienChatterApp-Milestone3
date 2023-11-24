const React = require("react");
const Default = require('./layouts/default')
const Protected = require('./layouts/protected')
function specificPost({post, user}) {
    return (
        <div>
        
            {user ? (
            <Protected user= {user}>
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
                </Protected>     
            ) : (
                    <Default>
                        <h1>Please sign in</h1>
                    </Default>
       )}
       
            </div>
    )
}

module.exports= specificPost