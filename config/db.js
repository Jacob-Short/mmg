const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// mongoDB connection
// will give us back a promise
// can use .then .catch but will
// instead use async await
// crteaing a function so we can 
// pass it to our server.js
// use try catch for errors if
// cant connect so can have err msg
const connectDB = async () => {
    try {
        // since returns a promise we 
        // put await in front of it
        await mongoose.connect(db, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log('Mongodb connected...')
    } catch (err) {
        console.error(err.message);
        // exit process with failure
        process.exit(1)
    }
}

module.exports = connectDB;