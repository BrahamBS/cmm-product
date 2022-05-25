import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Intervention } from '.'

const app = () => express(apiRoot, routes)

let userSession, adminSession, intervention

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const admin = await User.create({ email: 'c@c.com', password: '123456', role: 'admin' })
  userSession = signSync(user.id)
  adminSession = signSync(admin.id)
  intervention = await Intervention.create({})
})

test('POST /interventions 201 (admin)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: adminSession, titre: 'test', dateDebut: 'test', dateFin: 'test', description: 'test', beneficiaires: 'test', prestataires: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.titre).toEqual('test')
  expect(body.dateDebut).toEqual('test')
  expect(body.dateFin).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.beneficiaires).toEqual('test')
  expect(body.prestataires).toEqual('test')
})

test('POST /interventions 401 (user)', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('POST /interventions 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /interventions 200 (admin)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: adminSession })
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /interventions 401 (user)', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /interventions 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /interventions/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${intervention.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(intervention.id)
})

test('GET /interventions/:id 401 (user)', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${intervention.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /interventions/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${intervention.id}`)
  expect(status).toBe(401)
})

test('GET /interventions/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})

test('PUT /interventions/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${intervention.id}`)
    .send({ access_token: adminSession, titre: 'test', dateDebut: 'test', dateFin: 'test', description: 'test', beneficiaires: 'test', prestataires: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(intervention.id)
  expect(body.titre).toEqual('test')
  expect(body.dateDebut).toEqual('test')
  expect(body.dateFin).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.beneficiaires).toEqual('test')
  expect(body.prestataires).toEqual('test')
})

test('PUT /interventions/:id 401 (user)', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${intervention.id}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('PUT /interventions/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${intervention.id}`)
  expect(status).toBe(401)
})

test('PUT /interventions/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: adminSession, titre: 'test', dateDebut: 'test', dateFin: 'test', description: 'test', beneficiaires: 'test', prestataires: 'test' })
  expect(status).toBe(404)
})

test('DELETE /interventions/:id 204 (admin)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${intervention.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(204)
})

test('DELETE /interventions/:id 401 (user)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${intervention.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('DELETE /interventions/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${intervention.id}`)
  expect(status).toBe(401)
})

test('DELETE /interventions/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})
