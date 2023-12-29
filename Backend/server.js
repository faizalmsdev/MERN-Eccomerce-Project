// Import and configure dotenv to load environment variables from 'config.env'
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');
const mongoose = require('mongoose');

// Construct the MongoDB connection URI using environment variables
const dbConnectionUri = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD).replace('<USERNAME>',process.env.DATABASE_USERNAME);

// Connect to MongoDB database using Mongoose

mongoose.connect(dbConnectionUri)
.then(()=> console.log("Db connection successful"))
.catch((err) => console.log('Error connecting to mongodb' , err))

const port = 2000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});