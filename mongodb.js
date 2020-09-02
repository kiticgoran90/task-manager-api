const chalk = require('chalk')

/* const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID */

// Using destructuring
const { MongoClient, ObjectID } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
const id = new ObjectID()


MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error) {
        return console.log(chalk.red.inverse('Unable to connect to database!'))
    }
    console.log(chalk.green.inverse('Connected successfully!'))
    const db = client.db(databaseName)

})
