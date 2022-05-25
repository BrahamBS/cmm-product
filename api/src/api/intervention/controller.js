import { success, notFound } from '../../services/response/'
import { Intervention } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Intervention.create(body)
    .then((intervention) => intervention.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Intervention.count(query)
    .then(count => Intervention.find(query, select, cursor)
      .then((interventions) => ({
        count,
        rows: interventions.map((intervention) => intervention.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Intervention.findById(params.id)
    .then(notFound(res))
    .then((intervention) => intervention ? intervention.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Intervention.findById(params.id)
    .then(notFound(res))
    .then((intervention) => intervention ? Object.assign(intervention, body).save() : null)
    .then((intervention) => intervention ? intervention.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Intervention.findById(params.id)
    .then(notFound(res))
    .then((intervention) => intervention ? intervention.remove() : null)
    .then(success(res, 204))
    .catch(next)
