# Meta Movies & Games

__Authors__= Jacob Short, Bethany Folino
(React Capstone Project)
(MERN Stack)


### Environment & Setup:

Node.js - (https://nodejs.org/en/)
Postman - Test our API (https://www.postman.com/)

### Developer Tools:
React Dev Tools -(https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
Redux Devtools - (https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)



### Created NOSQL Data Base with MongoDB.
Document database very similar to json objects.
Easy to manage, no installs. 
Cross-compatable.


### MongoDB Atlas - (https://www.mongodb.com/cloud/atlas)
Created cluster using AWS and Oregon Region.
(512 MB 'development environment')

### Collections => Tables
Using mongoose to interact with our DB

### Config:
Can create global values within our application and will 
store in default.json

** If get 'DeprecationWarning': **
    Add the options suggested options to the connectDB
    function inside of config/db.js 

Each users password will be enrypted by salting and 
hashing each password using bcrypt.js
(https://preview.npmjs.com/package/bcryptjs/v/1.0.1)

Each user will recieve a jwt when registering and 
signing in for access to private pages:
(https://github.com/auth0/node-jsonwebtoken)
find info at (https://jwt.io/)


Section 5 Post Route:
Our reviews, need imdbID path
to make a review

load user and set auth token
section 8 # 41


