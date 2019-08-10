const request = require('supertest');
const app = require('../app')

const mongo = require('../common/mongo')

describe('Test the root path', () => {
    beforeAll(() => {
        mongo.connect();
    });
    afterAll((done) => {
        mongo.disconnect(done);
    });

    test('It should response the GET method', async() => {
        await request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
        });
    });
});
