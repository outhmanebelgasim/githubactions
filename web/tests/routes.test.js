const request = require('supertest')
const app = require('../app')

describe('GET /', () => {
  it('should return status 200', async () => {
    const res = await request(app)
      .get('/')
    expect(res.statusCode).toEqual(200)
  })
})

describe('GET /ice-flakes', () => {
  it('should return a static json response with status 201', async () => {
    const res = await request(app)
      .get('/ice-flakes')
    expect(res.body).toEqual({
      resource: 'ice-flakes',
      count: 1005,
      shape: 'rectangle'
    })
    expect(res.statusCode).toEqual(201)
  })
})

describe('GET /users/users', () => {
  it('should return the existing users response with status 200', async () => {
    const res = await request(app)
      .get('/users/users')
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual('respond with a resource')
  })
})
