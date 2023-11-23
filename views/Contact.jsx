const React = require("react");
const Default = require('./layouts/default')


function Contact() {
    return (
  <Default>
  <div className="contact-container">
          <div className="image-container">
            <img src="https://media.istockphoto.com/id/1171546024/vector/spy-secret-agent-flat-vector-concept-illustration.jpg?s=612x612&w=0&k=20&c=VooIeIQSuW1Ame178XfauqrDu-_2UgC3JHhgHajT4As="></img>
          </div>
          <div className="contact-form-container">
            <form>
              <h1>Make Contact</h1>
              <div className="contact-name-container">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text"></input>
              </div>
              <div className="contact-email-container">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="text"></input> 
              </div>
              <div className="contact-message-container">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" type="text"></textarea> 
              </div>
          </form>
          </div>
  </div>
  </Default> 
    )
}
  
module.exports = Contact