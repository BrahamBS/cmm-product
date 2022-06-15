import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export DemandeIntervention, { schema } from './model'

const router = new Router()
const { etablissement, typeInter, description } = schema.tree

/**
 * @api {post} /demande-interventions Create demande intervention
 * @apiName CreateDemandeIntervention
 * @apiGroup DemandeIntervention
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam etablissement Demande intervention's etablissement.
 * @apiParam typeInter Demande intervention's typeInter.
 * @apiParam description Demande intervention's description.
 * @apiSuccess {Object} demandeIntervention Demande intervention's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Demande intervention not found.
 * @apiError 401 user access only.
 */
router.post('/',
  token({ required: true }),
  body({ etablissement, typeInter, description }),
  create)

/**
 * @api {get} /demande-interventions Retrieve demande interventions
 * @apiName RetrieveDemandeInterventions
 * @apiGroup DemandeIntervention
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of demande interventions.
 * @apiSuccess {Object[]} rows List of demande interventions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only.
 */
router.get('/',
  token({ required: true }),
  query(),
  index)

/**
 * @api {get} /demande-interventions/:id Retrieve demande intervention
 * @apiName RetrieveDemandeIntervention
 * @apiGroup DemandeIntervention
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} demandeIntervention Demande intervention's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Demande intervention not found.
 * @apiError 401 user access only.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {put} /demande-interventions/:id Update demande intervention
 * @apiName UpdateDemandeIntervention
 * @apiGroup DemandeIntervention
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam etablissement Demande intervention's etablissement.
 * @apiParam typeInter Demande intervention's typeInter.
 * @apiParam description Demande intervention's description.
 * @apiSuccess {Object} demandeIntervention Demande intervention's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Demande intervention not found.
 * @apiError 401 user access only.
 */
router.put('/:id',
  token({ required: true }),
  body({ etablissement, typeInter, description }),
  update)

/**
 * @api {delete} /demande-interventions/:id Delete demande intervention
 * @apiName DeleteDemandeIntervention
 * @apiGroup DemandeIntervention
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Demande intervention not found.
 * @apiError 401 admin access only.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
