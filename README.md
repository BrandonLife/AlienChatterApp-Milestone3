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
<li>Now that everything is installed, from the root directory which is AlienChatterApp(it should say (main) on the side if you are using gitbash) type npm run dev</li>
<li>The application is now running. Go to your browser and type in localhost:8080/posts/home and that's it</li>
</ol>

<h1>Post Routes</h1>
<h2>These routes use /posts as their base url</h2>
<table>
<tr>
<th>Route</th>
<th>Method</th>
<th>Route URL</th>
<th>Full URL</th>
</tr>

<tr>
<td>Home</td>
<td>GET</td>
<td>/home</td>
<td>/posts/home</td>
</tr>

<tr>
<td>About</td>
<td>GET</td>
<td>/about</td>
<td>/posts/about</td>
</tr>

<tr>
<td>Contact</td>
<td>GET</td>
<td>/contact</td>
<td>/posts/contact</td>
</tr>

<tr>
<td>Blog</td>
<td>GET</td>
<td>/blog/:username</td>
<td>/posts/blog/:username</td>
</tr>

<tr>
<td>Specific Post Page</td>
<td>GET</td>
<td>/:id</td>
<td>/posts/:id</td>
</tr>

<tr>
<td>New Post Page</td>
<td>GET</td>
<td>/new/:username</td>
<td>/posts/new/:username</td>
</tr>

<tr>
<td>Edit Post Page</td>
<td>GET</td>
<td>/:id/edit</td>
<td>/posts/:id/edit</td>
</tr>

<tr>
<td>Create Post</td>
<td>POST</td>
<td>/:username</td>
<td>/posts/:username</td>
</tr>

<tr>
<td>Update Post</td>
<td>PUT</td>
<td>/:id</td>
<td>/posts/:id</td>
</tr>

<tr>
<td>Delete Post</td>
<td>DELETE</td>
<td>/:id</td>
<td>/posts/:id</td>
</tr>

</table>

<h1>User Routes</h1>
<h2>These routes use /users as their base url</h2>
<table>
<tr>
<th>Route</th>
<th>Method</th>
<th>Route url</th>
<th>Full url</th>
</tr>

<tr>
<td>Registration Page</td>
<td>GET</td>
<td>/registration</td>
<td>/users/registration</td>
</tr>

<tr>
<td>Login Page</td>
<td>GET</td>
<td>/userlogin</td>
<td>/users/userlogin</td>
</tr>

<tr>
<td>Logout</td>
<td>POST</td>
<td>/logout</td>
<td>/users/logout</td>
</tr>

<tr>
<td>Regiser new user</td>
<td>POST</td>
<td>/register</td>
<td>/users/register</td>
</tr>

<tr>
<td>Login User</td>
<td>POST</td>
<td>/login</td>
<td>/users/login</td>
</tr>

</table>

<h1>Sources for help</h1>
<ul>
<h2>General Questions such as how do I clear a cookie using jwt?</h2>
<li>Google</li>
<h2>Why is localstorage not defined</h2>
<li>https://stackoverflow.com/questions/52474208/react-localstorage-is-not-defined-error-showing</li>
<h2>How do I create a login post route using NodeJs and MongoDB? And how do I create a new user?</h2>
<li>https://blog.bitsrc.io/how-to-use-jwt-for-authentication-and-create-a-login-system-in-node-js-and-mongodb-83bb852e777a</li>
<h2>How do I verify the user?</h2>
<li> https://www.youtube.com/watch?v=yHdkG33l7tQ</li>
<h2>How do I create a verify user middleware?</h2>
<li>https://www.loginradius.com/blog/engineering/nodejs-and-mongodb-application-authentication-by-jwt/</li>
<h2>How can i find the id from a req using the username in the req.params</h2>
<li>From ChatGPT, If you want to find a user's ID based on their username in Express.js using req.params, you can achieve this by querying your MongoDB database with Mongoose</li>
<h2>How can I implment Protected Routes using express-react-views</h2>
<li>From ChatGPT, In an Express application using express-react-views, you can implement protected routes by checking the user's authentication status before rendering the views </li>
<h2>Image sources on Home page</h2>
<li>Alien in cornfield pic-https://images.nightcafe.studio/jobs/qVEluUdr4aSFYNcrNgF6/qVEluUdr4aSFYNcrNgF6--1--c4bo3.jpg?tr=w-1600,c-at_max</li>
<li>Join the fight pic-https://static1.squarespace.com/static/576454e629687fb39bd1f977/t/5f319bf3115f6d75cb9e0178/1597086714579/thefight.png?format=1500w</li>
<h2>Using cors middleware how can i allow a connection from localhost:1000</h2>
<li>From CHATGPT, To allow connections from localhost:3000 using the cors middleware in Express, you can configure the middleware with specific options to specify the allowed origin. EX: app.use(cors({
  origin: 'http://localhost:1000', // Allow requests from this origin
  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
})); </li>
</ul>