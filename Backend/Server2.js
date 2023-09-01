const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000;

const mongoUrl = 'mongodb://localhost:27017'; // Update with your MongoDB URL
const dbName = 'mydb'; // Update with your database name

let db;

MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err);
    console.log('Connected to MongoDB');
    db = client.db(dbName);
});

app.use(express.json());

app.post('/signup', (req, res) => {
    const user = req.body;
    // Store user in the database, handle errors and duplicates
    // Example: db.collection('users').insertOne(user, (err, result) => {});
    res.send('Signup successful');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Check user credentials in the database, respond accordingly
    // Example: db.collection('users').findOne({ username, password }, (err, user) => {});
    res.send('Login successful');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
