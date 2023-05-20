<!DOCTYPE html>
<body>
  <h1>Fib Calculator</h1>

  <h2>Overview</h2>
  <p>
    This project demonstrates a simple web application using Docker Compose and Dockerfile.dev. It consists of a server built with Node.js, a frontend built with React, and uses Nginx as a reverse proxy. The server relies on a PostgreSQL database and a Redis cache.
  </p>

  <h2>Setup</h2>
  <ol>
    <li>Install Docker and Docker Compose if you haven't already.</li>
    <li>Clone the project repository.</li>
    <li>Navigate to the project directory.</li>
  </ol>

  <h2>Running the Application</h2>
  <p>Use the following command to start the application:</p>
  <pre><code>docker-compose up --build</code></pre>
  <pre><code>docker-compose up</code></pre>
  
  <p>This command will build and start the necessary containers.</p>

  <h2>Accessing the Application</h2>
  <p>Once the containers are up and running, you can access the application in your browser:</p>
  <ul>
    <li>Server: <a href="http://localhost:3000">http://localhost:3000</a></li>
    <li>Frontend: <a href="http://localhost:80">http://localhost:80</a></li>
    <li>PostgreSQL: <code>localhost:5432</code></li>
    <li>Redis: <code>localhost:6379</code></li>
    <li>http://localhost:3050</code></li>
  </ul>

  <h2>Stopping the Application</h2>
  <p>To stop the running containers, use the following command:</p>
  <pre><code>docker-compose down</code></pre>

  <h2>Contributing</h2>
  <p>
    If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.
  </p>

</body>
</html>
