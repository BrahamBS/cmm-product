import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Actualite, { schema } from './model'

const router = new Router()
const { titre, photoUrl, contenue, isFeatured } = schema.tree

/**
 * @api {post} /actualites Create actualite
 * @apiName CreateActualite
 * @apiGroup Actualite
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam titre Actualite's titre.
 * @apiParam photoUrl Actualite's photoUrl.
 * @apiParam contenue Actualite's contenue.
 * @apiParam isFeatured Actualite's isFeatured.
 * @apiSuccess {Object} actualite Actualite's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Actualite not found.
 * @apiError 401 admin access only.
 */
router.post('/',
  //token({ required: true, roles: ['admin'] }),
  body({ titre,  contenue }),
  create)

/**
 * @api {get} /actualites Retrieve actualites
 * @apiName RetrieveActualites
 * @apiGroup Actualite
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of actualites.
 * @apiSuccess {Object[]} rows List of actualites.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /actualites/:id Retrieve actualite
 * @apiName RetrieveActualite
 * @apiGroup Actualite
 * @apiSuccess {Object} actualite Actualite's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Actualite not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /actualites/:id Update actualite
 * @apiName UpdateActualite
 * @apiGroup Actualite
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam titre Actualite's titre.
 * @apiParam photoUrl Actualite's photoUrl.
 * @apiParam contenue Actualite's contenue.
 * @apiParam isFeatured Actualite's isFeatured.
 * @apiSuccess {Object} actualite Actualite's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Actualite not found.
 * @apiError 401 admin access only.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ titre, photoUrl, contenue, isFeatured }),
  update)

/**
 * @api {delete} /actualites/:id Delete actualite
 * @apiName DeleteActualite
 * @apiGroup Actualite
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Actualite not found.
 * @apiError 401 admin access only.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
