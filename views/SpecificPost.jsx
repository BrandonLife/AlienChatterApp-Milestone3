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
            <div className="specific-post-comment"> 
                <p>{post.comment }</p>
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