import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Suiviprestation } from '.'

const app = () => express(apiRoot, routes)

let userSession, adminSession, suiviprestation

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const admin = await User.create({ email: 'c@c.com', password: '123456', role: 'admin' })
  userSession = signSync(user.id)
  adminSession = signSync(admin.id)
  suiviprestation = await Suiviprestation.create({})
})

test('POST /suiviprestations 201 (admin)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: adminSession, prestataire: 'test', dateFacture: 'test', objetFacture: 'test', etat: 'test', observation: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.prestataire).toEqual('test')
  expect(body.dateFacture).toEqual('test')
  expect(body.objetFacture).toEqual('test')
  expect(body.etat).toEqual('test')
  expect(body.observation).toEqual('test')
})

test('POST /suiviprestations 401 (user)', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('POST /suiviprestations 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /suiviprestations 200 (admin)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: adminSession })
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /suiviprestations 401 (user)', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /suiviprestations 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /suiviprestations/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${suiviprestation.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(suiviprestation.id)
})

test('GET /suiviprestations/:id 401 (user)', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${suiviprestation.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /suiviprestations/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${suiviprestation.id}`)
  expect(status).toBe(401)
})

test('GET /suiviprestations/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})

test('PUT /suiviprestations/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${suiviprestation.id}`)
    .send({ access_token: adminSession, prestataire: 'test', dateFacture: 'test', objetFacture: 'test', etat: 'test', observation: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(suiviprestation.id)
  expect(body.prestataire).toEqual('test')
  expect(body.dateFacture).toEqual('test')
  expect(body.objetFacture).toEqual('test')
  expect(body.etat).toEqual('test')
  expect(body.observation).toEqual('test')
})

test('PUT /suiviprestations/:id 401 (user)', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${suiviprestation.id}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('PUT /suiviprestations/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${suiviprestation.id}`)
  expect(status).toBe(401)
})

test('PUT /suiviprestations/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: adminSession, prestataire: 'test', dateFacture: 'test', objetFacture: 'test', etat: 'test', observation: 'test' })
  expect(status).toBe(404)
})

test('DELETE /suiviprestations/:id 204 (admin)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${suiviprestation.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(204)
})

test('DELETE /suiviprestations/:id 401 (user)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${suiviprestation.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('DELETE /suiviprestations/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${suiviprestation.id}`)
  expect(status).toBe(401)
})

test('DELETE /suiviprestations/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})
