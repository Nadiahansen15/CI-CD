const supertest = require('supertest')
const app = require('./index.js')
const request = supertest(app)

describe('POST /users - Signup', () => {
  describe('Given a username and password', () => {
    test('should respond with 200 status code and a token', async () => {
      const res = await request.post('/users').send({
        username: 'Test',
        password: '1234',
      })

      expect(res.statusCode).toBe(200)
      expect(res.body).toHaveProperty('token')
    })
  })

  describe('Missing username or passowrd', () => {
    test('should respond with 400 status code and a msg', async () => {
      const res = await request.post('/users').send({
        username: 'Test',
      })

      expect(res.statusCode).toBe(400)
      expect(res.body).toHaveProperty('msg')
      expect(res.body.msg).toBe('Missing username or password')
    })
  })
})
