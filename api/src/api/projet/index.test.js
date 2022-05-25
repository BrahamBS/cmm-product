import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Projet } from '.'

const app = () => express(apiRoot, routes)

let userSession, adminSession, projet

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const admin = await User.create({ email: 'c@c.com', password: '123456', role: 'admin' })
  userSession = signSync(user.id)
  adminSession = signSync(admin.id)
  projet = await Projet.create({})
})

test('POST /projets 201 (admin)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: adminSession, titre: 'test', description: 'test', photoUrl: 'test', dateDebut: 'test', dateFin: 'test', emplacement: 'test', nature: 'test', suiveurs: 'test', prestataires: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.titre).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.photoUrl).toEqual('test')
  expect(body.dateDebut).toEqual('test')
  expect(body.dateFin).toEqual('test')
  expect(body.emplacement).toEqual('test')
  expect(body.nature).toEqual('test')
  expect(body.suiveurs).toEqual('test')
  expect(body.prestataires).toEqual('test')
})

test('POST /projets 401 (user)', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('POST /projets 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /projets 200 (admin)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: adminSession })
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /projets 401 (user)', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /projets 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /projets/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${projet.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(projet.id)
})

test('GET /projets/:id 401 (user)', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${projet.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /projets/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${projet.id}`)
  expect(status).toBe(401)
})

test('GET /projets/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})

test('PUT /projets/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${projet.id}`)
    .send({ access_token: adminSession, titre: 'test', description: 'test', photoUrl: 'test', dateDebut: 'test', dateFin: 'test', emplacement: 'test', nature: 'test', suiveurs: 'test', prestataires: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(projet.id)
  expect(body.titre).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.photoUrl).toEqual('test')
  expect(body.dateDebut).toEqual('test')
  expect(body.dateFin).toEqual('test')
  expect(body.emplacement).toEqual('test')
  expect(body.nature).toEqual('test')
  expect(body.suiveurs).toEqual('test')
  expect(body.prestataires).toEqual('test')
})

test('PUT /projets/:id 401 (user)', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${projet.id}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('PUT /projets/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${projet.id}`)
  expect(status).toBe(401)
})

test('PUT /projets/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: adminSession, titre: 'test', description: 'test', photoUrl: 'test', dateDebut: 'test', dateFin: 'test', emplacement: 'test', nature: 'test', suiveurs: 'test', prestataires: 'test' })
  expect(status).toBe(404)
})

test('DELETE /projets/:id 204 (admin)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${projet.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(204)
})

test('DELETE /projets/:id 401 (user)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${projet.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('DELETE /projets/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${projet.id}`)
  expect(status).toBe(401)
})

test('DELETE /projets/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})
