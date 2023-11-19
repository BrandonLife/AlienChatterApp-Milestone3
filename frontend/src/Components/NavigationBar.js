import React from 'react'
import {Link} from 'react-router-dom'
function NavigationBar() {
  return (
    <div className='nav-container'>
        <div className='nav-link-container'>
            <div className='nav-link'>
                <Link to='/'>Home</Link>
            </div>
            <div className='nav-link'>
                <Link to='/about'>About</Link>
            </div>
            <div className='nav-link'>
                <Link to='/blog'>Blog</Link>
            </div>
            <div className='nav-link'>
                <Link to='/contact'>Contact Us</Link>
            </div>
          </div>
            <div className='login'>
                <div className='nav-link-right'>
                    <Link to='/register'>Register</Link>
                </div>
                 <div className='nav-link-right'>
                <Link to='/login'>Log in</Link>
                </div>
            </div>
      </div>              
    //   end of container
  )
}

export default NavigationBar