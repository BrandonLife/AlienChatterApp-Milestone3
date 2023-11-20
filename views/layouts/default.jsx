const React = require("react");
function Default(html) {
    return (
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Alien Chatter</title>
                <link rel="stylesheet" href="/main.css" />
     </head>
            <body>
                {/* beginning of nav */}
    <div className='nav-container'>
        <div className='nav-link-container'>
            <div className='nav-link'>
                <a href='/users/'>Home</a>
            </div>
            <div className='nav-link'>
                <a href='/users/about'>About</a>
            </div>
            <div className='nav-link'>
                <a href='/users/blog'>Blog</a>
            </div>
            <div className='nav-link'>
                <a href='/users/contact'>Contact Us</a>
            </div>
          </div>
            <div className='login'>
                <div className='nav-link-right'>
                    <a href='/users/registration'>Register</a>
                </div>
                 <div className='nav-link-right'>
                <a href='/users/userlogin'>Log in</a>
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
module.exports= Default