INSERT INTO topics (title) VALUES
  ('Node Resources'),
  ('Express Resources'),
  ('PostgreSQL Resources'),
  ('jQuery Resources'),
  ('MDN Javascript Resources'),
  ('MDN CSS Resources'),
  ('MDN HTML Resources');

INSERT INTO bookmarks (title, url, description, topic_id) VALUES
  -- Node Resources Bookmarks
  (
    'Node.js v21.5.0 documentation',
    'https://nodejs.org/docs/latest/api/',
    'Official documentation for Node.js',
    1
  ),
  (
    'Node.js Official Docs',
    'https://nodejs.org/',
    'Official documentation for Node.js',
    1
  ),
  (
    'Express.js Guide',
    'https://expressjs.com/',
    'Express.js web framework documentation',
    1
  ),
  -- Express Resources Bookmarks
  (
    'Documentation for express 4.x API',
    'https://expressjs.com/en/4x/api.html',
    'Minamalist web framework for Node.js',
    2
  ),
  (
    'Express.js API Reference',
    'https://expressjs.com/en/4x/api.html',
    'Express.js API reference',
    2
  ),
  (
    'Building a RESTful API with Node.js and Express.js',
    'https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm',
    'Tutorial on building a RESTful API',
    2
  ),
  -- PostgreSQL Resources Bookmarks
  (
    'PostgreSQL 16.1 Documentation',
    'https://www.postgresql.org/docs/current/index.html',
    'Open Source Relational Database',
    3
  ),
  (
    'PostgreSQL Documentation',
    'https://www.postgresql.org/docs/',
    'Official documentation for PostgreSQL',
    3
  ),
  (
    'Learn PostgreSQL - Tutorial for Beginners',
    'https://www.postgresqltutorial.com/',
    'PostgreSQL tutorial for beginners',
    3
  ),
  -- jQuery Resources Bookmarks
  (
    'jQuery API Documentation',
    'https://api.jquery.com/',
    'jQuery API documentation',
    4
  ),
  (
    'jQuery Tutorial for Beginners',
    'https://www.w3schools.com/jquery/',
    'jQuery tutorial on W3Schools',
    4
  ),
  -- MDN Javascript Resources Bookmarks
  (
    'MDN JavaScript Guide',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
    'MDN JavaScript Guide',
    5
  ),
  (
    'JavaScript.info',
    'https://javascript.info/',
    'Modern JavaScript Tutorial',
    5
  ),
  -- MDN CSS Resources Bookmarks
  (
    'MDN CSS Reference',
    'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference',
    'MDN CSS Reference',
    6
  ),
  (
    'CSS Tricks',
    'https://css-tricks.com/',
    'Tips, Tricks, and Techniques on CSS',
    6
  ),
  -- MDN HTML Resources Bookmarks
  (
    'MDN HTML Element Reference',
    'https://developer.mozilla.org/en-US/docs/Web/HTML/Element',
    'MDN HTML Element Reference',
    7
  ),
  (
    'HTML Dog - HTML Tutorials',
    'https://htmldog.com/',
    'HTML tutorials and references',
    7
  );
