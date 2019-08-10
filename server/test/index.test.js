const request = require('supertest');
const app = require('../app')

const mongo = require('../common/mongo')

describe('GET /', () => {
    beforeAll(() => {
        mongo.connect();
    });
    afterAll(async () => {
        await mongo.removeAll();
        return mongo.disconnect();
    });

    test('should response the GET method', async() => {
        await request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
        });
    });
});
