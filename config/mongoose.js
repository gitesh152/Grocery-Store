//Mongoose Configuration
const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://gitesh152:helloworld@cluster1.eirfrai.mongodb.net/grocery_store_db'
);
const db = mongoose.connection;

//Logging Error
db.on('error', console.error.bind(console, 'Error connecting database ...'));

//Event Listener for Connection Open
db.once('open', () => console.log(`Successfully connected to ${db.name}`));

module.exports = db;
