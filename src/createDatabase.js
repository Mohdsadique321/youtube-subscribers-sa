/**
 * @fileOverview Script to refresh subscribers in the database.
 * @module refreshSubscribers
 */

const mongoose = require('mongoose');
const subscriberModel = require('./models/subscribers');
const data = require('./data');

// Connect to DATABASE
const DATABASE_URL = "mongodb+srv://mohdsadique312:sadique@cluster0.kmaggxd.mongodb.net/youtube";
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Database connected...'));

/**
 * Refreshes all subscribers in the database.
 * @async
 * @function refreshAll
 */
exports.refreshAll = async () => {
    await subscriberModel.deleteMany({});
    await subscriberModel.insertMany(data);
};

