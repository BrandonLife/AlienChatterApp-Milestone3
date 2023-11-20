const React = require("react");
const Default = require('./layouts/default')

function About() {
    return (
      <Default>
     <div className='about-container'>
        <div className='about-header'>
          <h1>About Us</h1>
        </div>
        <div className='about-paragraph'>
          <p>We are a society of secret agents. We are here but not here. We come and we go. Time is irrelevant. Do you understand?
            If not we hope our website will help you to understand.
          </p>
        </div>
        </div>
        </Default>
       
    )
  }

  module.exports= About