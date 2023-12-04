const React = require("react");
const Default = require('./layouts/default')
const Protected = require('./layouts/protected')

function About({user}) {
  return (
    <div>
      {/* Ternary operator approach for rendering views comes from ChatGPT */}
      {user ? (
  <Protected user= {user}>
  <div className='about-container'>
     <div className='about-header'>
       <h1>About Us</h1>
     </div>
     <div className='about-paragraph'>
       <p>We are a society of secret agents. We are here but not here. We come and we go. We protect and serve from those that we see as "threats" to the world. We are the final line against those from beyond. 
       </p>
       </div>
       <div className="video">
       <iframe src="https://www.youtube.com/embed/RsQCXN4o4Ps?si=gAnN5RE0_8wI-jSd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       </div>
     </div>
     </Protected>
      ) : (
        <Default>
        <div className='about-container'>
           <div className='about-header'>
             <h1>About Us</h1>
           </div>
           <div className='about-paragraph'>
             <p>We are a society of secret agents. We are here but not here. We come and we go. We protect and serve from those that we see as "threats" to the world. We are the final line against those from beyond. 
             </p>
             </div>
             <div className="video">
             <iframe width="560" height="315" src="https://www.youtube.com/embed/RsQCXN4o4Ps?si=gAnN5RE0_8wI-jSd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             </div>
           </div>
           </Default>
      )}
    
        </div>  
    )
  }

  module.exports= About