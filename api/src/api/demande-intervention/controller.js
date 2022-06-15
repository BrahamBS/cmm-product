import { success, notFound } from '../../services/response/'
import { DemandeIntervention } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  DemandeIntervention.create(body)
    .then((demandeIntervention) => demandeIntervention.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  DemandeIntervention.count(query)
    .then(count => DemandeIntervention.find(query, select, cursor)
      .then((demandeInterventions) => ({
        count,
        rows: demandeInterventions.map((demandeIntervention) => demandeIntervention.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  DemandeIntervention.findById(params.id)
    .then(notFound(res))
    .then((demandeIntervention) => demandeIntervention ? demandeIntervention.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  DemandeIntervention.findById(params.id)
    .then(notFound(res))
    .then((demandeIntervention) => demandeIntervention ? Object.assign(demandeIntervention, body).save() : null)
    .then((demandeIntervention) => demandeIntervention ? demandeIntervention.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  DemandeIntervention.findById(params.id)
    .then(notFound(res))
    .then((demandeIntervention) => demandeIntervention ? demandeIntervention.remove() : null)
    .then(success(res, 204))
    .catch(next)
