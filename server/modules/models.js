const mongoose = require('mongoose');

const UrlsModelSchema = new mongoose.Schema({
    url: String,
    short_url: String
});

module.exports = mongoose.model('SomeModel', UrlsModelSchema);
