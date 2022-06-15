import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { DemandeIntervention } from '.'

const app = () => express(apiRoot, routes)

let userSession, adminSession, demandeIntervention

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const admin = await User.create({ email: 'c@c.com', password: '123456', role: 'admin' })
  userSession = signSync(user.id)
  adminSession = signSync(admin.id)
  demandeIntervention = await DemandeIntervention.create({})
})

test('POST /demande-interventions 201 (user)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: userSession, etablissement: 'test', typeInter: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.etablissement).toEqual('test')
  expect(body.typeInter).toEqual('test')
  expect(body.description).toEqual('test')
})

test('POST /demande-interventions 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /demande-interventions 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /demande-interventions 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /demande-interventions/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${demandeIntervention.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(demandeIntervention.id)
})

test('GET /demande-interventions/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${demandeIntervention.id}`)
  expect(status).toBe(401)
})

test('GET /demande-interventions/:id 404 (user)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: userSession })
  expect(status).toBe(404)
})

test('PUT /demande-interventions/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${demandeIntervention.id}`)
    .send({ access_token: userSession, etablissement: 'test', typeInter: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(demandeIntervention.id)
  expect(body.etablissement).toEqual('test')
  expect(body.typeInter).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /demande-interventions/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${demandeIntervention.id}`)
  expect(status).toBe(401)
})

test('PUT /demande-interventions/:id 404 (user)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: userSession, etablissement: 'test', typeInter: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /demande-interventions/:id 204 (admin)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${demandeIntervention.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(204)
})

test('DELETE /demande-interventions/:id 401 (user)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${demandeIntervention.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('DELETE /demande-interventions/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${demandeIntervention.id}`)
  expect(status).toBe(401)
})

test('DELETE /demande-interventions/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})
