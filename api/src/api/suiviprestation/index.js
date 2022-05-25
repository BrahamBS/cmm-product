import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Suiviprestation, { schema } from './model'

const router = new Router()
const { prestataire, dateFacture, objetFacture, etat, observation } = schema.tree

/**
 * @api {post} /suiviprestations Create suiviprestation
 * @apiName CreateSuiviprestation
 * @apiGroup Suiviprestation
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam prestataire Suiviprestation's prestataire.
 * @apiParam dateFacture Suiviprestation's dateFacture.
 * @apiParam objetFacture Suiviprestation's objetFacture.
 * @apiParam etat Suiviprestation's etat.
 * @apiParam observation Suiviprestation's observation.
 * @apiSuccess {Object} suiviprestation Suiviprestation's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Suiviprestation not found.
 * @apiError 401 admin access only.
 */
router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ prestataire, dateFacture, objetFacture, etat, observation }),
  create)

/**
 * @api {get} /suiviprestations Retrieve suiviprestations
 * @apiName RetrieveSuiviprestations
 * @apiGroup Suiviprestation
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of suiviprestations.
 * @apiSuccess {Object[]} rows List of suiviprestations.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 admin access only.
 */
router.get('/',
  token({ required: true, roles: ['admin'] }),
  query(),
  index)

/**
 * @api {get} /suiviprestations/:id Retrieve suiviprestation
 * @apiName RetrieveSuiviprestation
 * @apiGroup Suiviprestation
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess {Object} suiviprestation Suiviprestation's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Suiviprestation not found.
 * @apiError 401 admin access only.
 */
router.get('/:id',
  token({ required: true, roles: ['admin'] }),
  show)

/**
 * @api {put} /suiviprestations/:id Update suiviprestation
 * @apiName UpdateSuiviprestation
 * @apiGroup Suiviprestation
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam prestataire Suiviprestation's prestataire.
 * @apiParam dateFacture Suiviprestation's dateFacture.
 * @apiParam objetFacture Suiviprestation's objetFacture.
 * @apiParam etat Suiviprestation's etat.
 * @apiParam observation Suiviprestation's observation.
 * @apiSuccess {Object} suiviprestation Suiviprestation's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Suiviprestation not found.
 * @apiError 401 admin access only.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ prestataire, dateFacture, objetFacture, etat, observation }),
  update)

/**
 * @api {delete} /suiviprestations/:id Delete suiviprestation
 * @apiName DeleteSuiviprestation
 * @apiGroup Suiviprestation
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Suiviprestation not found.
 * @apiError 401 admin access only.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
