import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Actualite } from '.'

const app = () => express(apiRoot, routes)

let userSession, adminSession, actualite

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const admin = await User.create({ email: 'c@c.com', password: '123456', role: 'admin' })
  userSession = signSync(user.id)
  adminSession = signSync(admin.id)
  actualite = await Actualite.create({})
})

test('POST /actualites 201 (admin)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: adminSession, titre: 'test', photoUrl: 'test', contenue: 'test', isFeatured: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.titre).toEqual('test')
  expect(body.photoUrl).toEqual('test')
  expect(body.contenue).toEqual('test')
  expect(body.isFeatured).toEqual('test')
})

test('POST /actualites 401 (user)', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('POST /actualites 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /actualites 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /actualites/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${actualite.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(actualite.id)
})

test('GET /actualites/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /actualites/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${actualite.id}`)
    .send({ access_token: adminSession, titre: 'test', photoUrl: 'test', contenue: 'test', isFeatured: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(actualite.id)
  expect(body.titre).toEqual('test')
  expect(body.photoUrl).toEqual('test')
  expect(body.contenue).toEqual('test')
  expect(body.isFeatured).toEqual('test')
})

test('PUT /actualites/:id 401 (user)', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${actualite.id}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('PUT /actualites/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${actualite.id}`)
  expect(status).toBe(401)
})

test('PUT /actualites/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: adminSession, titre: 'test', photoUrl: 'test', contenue: 'test', isFeatured: 'test' })
  expect(status).toBe(404)
})

test('DELETE /actualites/:id 204 (admin)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${actualite.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(204)
})

test('DELETE /actualites/:id 401 (user)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${actualite.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('DELETE /actualites/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${actualite.id}`)
  expect(status).toBe(401)
})

test('DELETE /actualites/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})
