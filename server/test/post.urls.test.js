const request = require('supertest');
const app = require('../app')

const mongo = require('../common/mongo')

describe('POST /urls', () => {
    beforeAll(() => {
        mongo.connect();
    });
    afterAll(async () => {
        await mongo.removeAll();
        return mongo.disconnect();
    });

    test('should response the post method with empty array', async () => {
        await request(app).post('/urls').send({url: 'https://yahoo.com'}).expect(200).expect(res=>{
            expect(res.body.url).toBe('https://yahoo.com')
        })

        await request(app).get('/urls').expect(200).expect(res=>{
            expect(Array.isArray(res.body)).toBeTruthy()
            expect(res.body.length).toBe(1)
        })
    });

    test('should not repeat the previously created url', async () => {
        await request(app).post('/urls').send({url: 'https://yahoo.com'}).expect(200).expect(res=>{
            expect(res.body.url).toBe('https://yahoo.com')
        })
        await request(app).post('/urls').send({url: 'https://yahoo.com'}).expect(200).expect(res=>{
            expect(res.body.url).toBe('https://yahoo.com')
        })

        await request(app).get('/urls').expect(200).expect(res=>{
            expect(Array.isArray(res.body)).toBeTruthy()
            expect(res.body.length).toBe(1)
        })
    });

    test('should create two urls', async () => {
        await request(app).post('/urls').send({url: 'https://yahoo.com'}).expect(200).expect(res=>{
            expect(res.body.url).toBe('https://yahoo.com')
        })
        await request(app).post('/urls').send({url: 'https://yahoo3.com'}).expect(200).expect(res=>{
            expect(res.body.url).toBe('https://yahoo3.com')
        })

        await request(app).get('/urls').expect(200).expect(res=>{
            expect(Array.isArray(res.body)).toBeTruthy()
            expect(res.body.length).toBe(2)
        })
    });
});
