import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Projet, { schema } from './model'

const router = new Router()
const { titre, description, photoUrl, dateDebut, dateFin, emplacement, nature, suiveurs, prestataires } = schema.tree

/**
 * @api {post} /projets Create projet
 * @apiName CreateProjet
 * @apiGroup Projet
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam titre Projet's titre.
 * @apiParam description Projet's description.
 * @apiParam photoUrl Projet's photoUrl.
 * @apiParam dateDebut Projet's dateDebut.
 * @apiParam dateFin Projet's dateFin.
 * @apiParam emplacement Projet's emplacement.
 * @apiParam nature Projet's nature.
 * @apiParam suiveurs Projet's suiveurs.
 * @apiParam prestataires Projet's prestataires.
 * @apiSuccess {Object} projet Projet's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Projet not found.
 * @apiError 401 admin access only.
 */
router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ titre, description, photoUrl, dateDebut, dateFin, emplacement, nature, suiveurs, prestataires }),
  create)

/**
 * @api {get} /projets Retrieve projets
 * @apiName RetrieveProjets
 * @apiGroup Projet
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of projets.
 * @apiSuccess {Object[]} rows List of projets.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 admin access only.
 */
router.get('/',
  token({ required: true, roles: ['admin'] }),
  query(),
  index)

/**
 * @api {get} /projets/:id Retrieve projet
 * @apiName RetrieveProjet
 * @apiGroup Projet
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess {Object} projet Projet's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Projet not found.
 * @apiError 401 admin access only.
 */
router.get('/:id',
  //token({ required: true, roles: ['admin'] }),
  show)

/**
 * @api {put} /projets/:id Update projet
 * @apiName UpdateProjet
 * @apiGroup Projet
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam titre Projet's titre.
 * @apiParam description Projet's description.
 * @apiParam photoUrl Projet's photoUrl.
 * @apiParam dateDebut Projet's dateDebut.
 * @apiParam dateFin Projet's dateFin.
 * @apiParam emplacement Projet's emplacement.
 * @apiParam nature Projet's nature.
 * @apiParam suiveurs Projet's suiveurs.
 * @apiParam prestataires Projet's prestataires.
 * @apiSuccess {Object} projet Projet's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Projet not found.
 * @apiError 401 admin access only.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ titre, description, photoUrl, dateDebut, dateFin, emplacement, nature, suiveurs, prestataires }),
  update)

/**
 * @api {delete} /projets/:id Delete projet
 * @apiName DeleteProjet
 * @apiGroup Projet
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Projet not found.
 * @apiError 401 admin access only.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
