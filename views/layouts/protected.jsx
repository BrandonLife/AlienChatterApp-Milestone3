const React = require("react");
function protectedDefault(html) {
    // console.log(html, "can i get user")
    
    return (
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Alien Chatter</title>
                <link rel="stylesheet" href="/main.css" />
                <link rel="stylesheet" href="/Home.css" />
                <link rel="stylesheet" href="/About.css" />
                <link rel="stylesheet" href="/newPost.css" />
                <link rel="stylesheet" href="/Blog.css" />
                <link rel="stylesheet" href="/SpecificPost.css" />
                <link rel="stylesheet" href="/editPost.css" />
                <link rel="stylesheet" href="/Contact.css" />
                
     </head>
            <body>
                {/* beginning of nav */}
    <div className='nav-container-protected'>
        <div className='nav-link-container-protected'>
            <div className='nav-link'>
                <a href='/posts/home'>Home</a>
            </div>
            <div className='nav-link'>
                <a href='/posts/about'>About</a>
            </div>
            <div className='nav-link'>
                <a href={`/posts/new/${html.user}`}>Add Post</a>
            </div>
            <div className='nav-link'>
                <a href={`/posts/blog/${html.user}`}>Blog</a>
            </div>
            <div className='nav-link'>
                <a href='/posts/contact'>Contact Us</a>
            </div>
          </div>
            <div className='login-protected'>
                        <div className='nav-link-right'>
                            <form action="/users/logout" method="POST">
                                {/* this had to be a self closing input tag */}
                                <span>{`Welcome, ${html.user}` }</span>
                            <input className="logout-input" type="submit" value={`Logout`}/> 
                    </form>
                </div>
            </div>
                </div> 
                {/* end of nav */}
                <div className="default-container">{html.children }</div>
                {/* Beginning of footer */}
        <div className='footer-container'>
          <div className='social-links-github'>
           <a href='https://github.com/BrandonLife'><img src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' alt='github logo'></img><span>GitHub</span></a>   
          </div>
          <div className='social-links-linkedin'>
           <a href='https://www.linkedin.com/in/brandon-life/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png' alt='linkedin logo'></img><span>Linkedin</span></a>   
          </div>
          <div className='social-links-codewars'>
           <a href='https://www.codewars.com/users/BrandonLife'><img src='https://pathrise-website-guide-wp.s3.us-west-1.amazonaws.com/guides/wp-content/uploads/2019/06/10173017/codewars-logo-1.png' alt='codewars logo'></img><span>Codewars</span></a>   
          </div>
      </div>
            {/*end of footer  */}
            </body>    
        </html>
    )
}
module.exports= protectedDefault