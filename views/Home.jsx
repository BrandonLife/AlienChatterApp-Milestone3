const React = require("react");
const Default = require('./layouts/default')
const Protected = require('./layouts/protected')

function Home({ user }) {
  return (
    <div>
          {/* Ternary operator approach for rendering views comes from ChatGPT */}
     {user ? (
  <Protected user= {user}>
  <div className='home-container'>
    <div className='float-left'>
      <h1>News</h1>
      <h2>Unauthorized Visitors seen in cornfield</h2>
      <img src='https://images.nightcafe.studio/jobs/qVEluUdr4aSFYNcrNgF6/qVEluUdr4aSFYNcrNgF6--1--c4bo3.jpg?tr=w-1600,c-at_max' alt='pic of alien'></img>
    </div>
    <div className='float-right'>
      <h1>Find out how you can join the fight</h1>
      <img src='https://static1.squarespace.com/static/576454e629687fb39bd1f977/t/5f319bf3115f6d75cb9e0178/1597086714579/thefight.png?format=1500w' alt='pic of people joining the fight'></img>
    </div>
  </div>
</Protected>
) : (
  <Default>
  <div className='home-container'>
    <div className='float-left'>
      <h1>News</h1>
      <h2>Unauthorized Visitors seen in cornfield</h2>
      <img src='https://images.nightcafe.studio/jobs/qVEluUdr4aSFYNcrNgF6/qVEluUdr4aSFYNcrNgF6--1--c4bo3.jpg?tr=w-1600,c-at_max' alt='pic of alien'></img>
    </div>
    <div className='float-right'>
      <h1>Find out how you can join the fight</h1>
      <img src='https://static1.squarespace.com/static/576454e629687fb39bd1f977/t/5f319bf3115f6d75cb9e0178/1597086714579/thefight.png?format=1500w' alt='pic of people joining the fight'></img>
    </div>
  </div>
</Default>
)} 
 </div>
    )
}
  
module.exports = Home

