const Models = require('./models');

class Controller {
    async getIndex(req, res) {
        res.render('index', { title: 'Express' });
    }

    async getAllUrls(req, res) {
        const urls = await Models.find({})
        res.send(urls)
    }
}

module.exports = new Controller()
