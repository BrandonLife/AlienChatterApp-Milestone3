import React from 'react'

function Footer() {
    return (
    
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
  )
}

export default Footer