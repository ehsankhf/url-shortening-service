const request = require('supertest');
const app = require('../app')

const mongo = require('../common/mongo')

describe('GET /urls', () => {
    beforeEach(() => {
        mongo.connect();
    });
    afterEach(async () => {
        await mongo.removeAll();
        return mongo.disconnect();
    });

    test('should response the GET method with empty array', async () => {
        await request(app).get('/urls').expect(200).expect(res=>{
            expect(Array.isArray(res.body)).toBeTruthy()
            expect(res.body.length).toBe(0)
        })
    });
});
