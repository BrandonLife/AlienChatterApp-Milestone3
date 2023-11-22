const React = require("react");
const Default = require('./layouts/default')
function specificPost({post}) {
    return (
        <Default>
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
            <div className="specific-post-button-container">
                <div className="specific-post-btn-edit">
                <a href={`/posts/${post._id}/edit`}><button>EDIT</button></a>
                </div>
                <div className="specific-post-btn-delete">
                <form action={`/posts/${post._id}?_method=DELETE`} method="POST">
                <input type="submit" value="DELETE"/>
                </form>
                </div>
            </div>
            </div>
            </Default>
    )
}

module.exports= specificPost