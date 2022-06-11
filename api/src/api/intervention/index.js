import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Intervention, { schema } from './model'

const router = new Router()
const { titre, dateDebut, dateFin, description,nature, beneficiaires, prestataires } = schema.tree

/**
 * @api {post} /interventions Create intervention
 * @apiName CreateIntervention
 * @apiGroup Intervention
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam titre Intervention's titre.
 * @apiParam dateDebut Intervention's dateDebut.
 * @apiParam dateFin Intervention's dateFin.
 * @apiParam description Intervention's description.
 * @apiParam beneficiaires Intervention's beneficiaires.
 * @apiParam prestataires Intervention's prestataires.
 * @apiSuccess {Object} intervention Intervention's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Intervention not found.
 * @apiError 401 admin access only.
 */
router.post('/',
  //token({ required: true, roles: ['etablissement'] }),
  body({ titre, dateDebut, dateFin, description, nature, beneficiaires, prestataires }),
  create)

/**
 * @api {get} /interventions Retrieve interventions
 * @apiName RetrieveInterventions
 * @apiGroup Intervention
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of interventions.
 * @apiSuccess {Object[]} rows List of interventions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 admin access only.
 */
router.get('/',
  //token({ required: true, roles: ['admin'] }),
  query(),
  index)

/**
 * @api {get} /interventions/:id Retrieve intervention
 * @apiName RetrieveIntervention
 * @apiGroup Intervention
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess {Object} intervention Intervention's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Intervention not found.
 * @apiError 401 admin access only.
 */
router.get('/:id',
  token({ required: true, roles: ['admin'] }),
  show)

/**
 * @api {put} /interventions/:id Update intervention
 * @apiName UpdateIntervention
 * @apiGroup Intervention
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam titre Intervention's titre.
 * @apiParam dateDebut Intervention's dateDebut.
 * @apiParam dateFin Intervention's dateFin.
 * @apiParam description Intervention's description.
 * @apiParam beneficiaires Intervention's beneficiaires.
 * @apiParam prestataires Intervention's prestataires.
 * @apiSuccess {Object} intervention Intervention's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Intervention not found.
 * @apiError 401 admin access only.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ titre, dateDebut, dateFin, description, beneficiaires, prestataires }),
  update)

/**
 * @api {delete} /interventions/:id Delete intervention
 * @apiName DeleteIntervention
 * @apiGroup Intervention
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Intervention not found.
 * @apiError 401 admin access only.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
