const mongoose = require('mongoose')

const { db_url, db_name } = require('../config/config')[process.env.NODE_ENV]

class Mongo {
    constructor() {
        mongoose.Promise = Promise;
        this.intialConnectionMaxTries = 10;
        this.intialConnectionCurrnetTryIndex = 0;
        this.mongoose = mongoose;
    }

    async connect() {
        try {
            await mongoose.connect(`${db_url}/${db_name}`, {
                useNewUrlParser: true,
                autoReconnect: true,
                reconnectTries: 10,
                reconnectInterval: 2000
            });
            console.log('MongoDB connected')
        } catch (err) {
            if (this.intialConnectionCurrnetTryIndex++ < this.intialConnectionMaxTries) {
                console.log('MongoDB connection Initial retry');
                setTimeout(() => this.connect(), 2000);
            } else {
                console.error('MongoDB connection error:', err.message)
            }
        }

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
