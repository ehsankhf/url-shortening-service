const mongoose = require('mongoose');

const UrlsModelSchema = new mongoose.Schema({
    url: String,
    short_url_id: String
});

module.exports = mongoose.model('SomeModel', UrlsModelSchema);
