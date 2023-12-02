<h1>Alien Chatter</h1>

<h1>Technologies Used</h1>
<ul>
<li>JSX(without React)</li>
<li>MongoDB</li>
<li>ExpressJS</li>
<li>NodeJS</li>
</ul>

<h1>NPM packages used</h1>
<ul>
<li>bcrypt</li>
<li>cookie-parser</li>
<li>jsonwebtoken</li>
<li>dotenv</li>
<li>cors</li>
<li>express</li>
<li>express-react-views</li>
<li>method-override</li>
<li>mongoose</li>
<li>react</li>
<li>react-cookie</li>
<li>react-dom</li>
</ul>

<h1>Description</h1>
<h2>What is Alien Chatter and what does it do?</h2>
<p>Alien Chatter is a full stack application with user authentication and authorization. Once signed in users can create posts, read posts, update posts, and delete posts that they have made.</p>
<h2>Why I used the technologies that I used.</h2>
<p>Looking above you can see that i used JSX without React, MongoDB, ExpressJS, And NodeJS. I used these particular technologies because i wanted to focus on my javascript journey and become better at building MERN stack applications.</p>
<h2>Challenges</h2>
<p>There were many challenges that I faced during this project. Here is a list of challenges:</p>
<ol>
<li>The first challenge was when i was using create-react-app to try and render pages realizing that i could not render pages using res.render</li>
<li>From the point above, this prompted me to use JSX(without React) and use the npm package express-react-views</li>
<li>Using JSX(without React) I realized I did not have access to state such as usestate or useEffect. So I had to work around that.</li>
<li>Due to me using the create-react-app at first, I had to restructure my entire entire project directories so that I could work with express-react-views</li>
<li>Another issue i had, was how was i going to get the id for certain routes so that i could show only the posts of the user. I figured this out by getting the username of the user and then getting the Id for the route</li>
</ol>
<h2>Features I want to implement in the future</h2>
<ol>
<li>An all posts page that displays all posts of every user</li>
<li>An account page for the user logged in</li>
<li>A working email submission form</li>
<li>The ability for a user to delete their account along with their posts</li>
<li>The ability for a user to update their account</li>
</ol>


<h1>How to Install and run</h1>
<ol>
<li>From Github go to code and then go to HTTPS and copy the link below or go to fork and then go to code </li>
<li>Using that link that you copied, open your terminal in your IDE(such as Visual Studio Code)</li>
<li>In the terminal, write, git clone "paste the link"</li>
<li>Now you have the project downloaded onto your local machine</li>
<li>Cd into the directory labeled AlienChatterApp</li>
<li>Once in the AlienChatterApp, npm install to install necessary node modules</li>
<li>Now that everything is install, from the root directory which is AlienChatterApp(it should say (main) on the side if you are using gitbash) type npm run dev</li>
<li>The application is now running. Go to your browser and type in localhost:8080/posts/home and that's it</li>
</ol>