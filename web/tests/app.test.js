const request = require('supertest')
const app = require('../app')

describe('Application routing', () => {
  it('should return an HTML error page with status 404 for an unknown path', async () => {
    const res = await request(app)
      .get('/missing-page')
    expect(res.statusCode).toEqual(404)
    expect(res.headers['content-type']).toMatch(/text\/html/)
    expect(res.text).toContain('Not Found')
  })
})
