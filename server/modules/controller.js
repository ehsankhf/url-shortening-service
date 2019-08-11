const uuidv3 = require('uuid/v3');

const Models = require('./models');

class Controller {
    async getIndex(req, res) {
        res.render('index', { title: 'Express' });
    }

    async getAllUrls(req, res) {
        const urls = await Models.find({}).sort({ _id: -1 })
        res.send(urls)
    }

    async addOneUrl(req, res) {
        let { url } = req.body;

        if (!url || !url.length) {
            return res.setHeader(400).send()
        }

        if (!/^https?:\/\//.test(url)) {
            url = (`http://${url}`)
        }

        let urlObject = await Models.findOne({ url })
        console.log(urlObject)
        if (!urlObject) {
            urlObject = {
                url, short_url_id: uuidv3(url, uuidv3.URL)
            }
            await Models.create(urlObject)
        }
        res.send(urlObject)
    }

    async redirection(req, res) {
        const { short_url_id } = req.params

        if (!short_url_id) {
            return res.setHeader(400).send()
        }

        let urlObject = await Models.findOne({ short_url_id })

        if (!urlObject) {
            return res.setHeader(400).send()
        }

        res.redirect(urlObject.url)
    }
}

module.exports = new Controller()
