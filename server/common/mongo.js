const mongoose = require('mongoose')

const { db_url, db_name } = require('../config/config')[process.env.NODE_ENV]

class Mongo {
    constructor() {
        mongoose.Promise = Promise;
        this.mongoose = mongoose;
    }

    connect() {
        mongoose.connect(`${db_url}/${db_name}`, { useNewUrlParser: true });
        const db = mongoose.connection;
        db.on('error', (err) => console.error('MongoDB connection error:', err.message));
        db.once('open', () => console.log('MongoDB connected'));
    }

    async disconnect() {
        return mongoose.disconnect();
    }

    async removeAll() {
        return Promise.all(
            Object.keys(mongoose.connection.collections).map(collection => {
                    mongoose.connection.collections[collection].drop((err) => {
                        console.log('collection dropped');
                    })
                }
            )
        );
    }
}

module.exports = new Mongo();
