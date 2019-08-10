const request = require('supertest');
const app = require('../app')

const mongo = require('../common/mongo')

describe('GET /short/:short_url_id', () => {
    beforeEach(() => {
        mongo.connect();
    });
    afterEach(async () => {
        await mongo.removeAll();
        return mongo.disconnect();
    });

    test('should response the GET method', async () => {
        let short_url_id
        await request(app).post('/urls').send({ url: 'https://yahoo.com' }).expect(200).expect(res => {
            expect(res.body.url).toBe('https://yahoo.com')
            short_url_id = res.body.short_url_id
        })
        await request(app).get(`/short/${short_url_id}`).then((response) => {
            expect(response.statusCode).toBe(302);
            expect(response.header.location).toBe('https://yahoo.com')
        });
    });
});
