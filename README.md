# META MOVIES & GAMES
(React Capstone Project)
(MERN)


Environment & Setup:
Node.js - (https://nodejs.org/en/)
Postman - Test our API (https://www.postman.com/)
Developer Tools:
React Dev Tools -(https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
Redux Devtools - (https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)


Step 1:
Create NOSQL Data Base with MongoDB.
Document database very similar to json objects.
Easy to manage, no installs. 
Cross-compatable.


MongoDB Atlas - (https://www.mongodb.com/cloud/atlas)
Create a cluster using AWS and select your region.
(Free plan with 512 MB 'dev env')
1. Add user for cluster.
2. Whitelist IP address

Collections => Tables
Mongoose is how we will be interacting with our DB

Config:
Can create global values within our application and will 
store in default.json

** If get 'DeprecationWarning': 
    Add the options suggested options to the connectDB
    function inside of config/db.js

