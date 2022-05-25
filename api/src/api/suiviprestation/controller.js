import { success, notFound } from '../../services/response/'
import { Suiviprestation } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Suiviprestation.create(body)
    .then((suiviprestation) => suiviprestation.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Suiviprestation.count(query)
    .then(count => Suiviprestation.find(query, select, cursor)
      .then((suiviprestations) => ({
        count,
        rows: suiviprestations.map((suiviprestation) => suiviprestation.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Suiviprestation.findById(params.id)
    .then(notFound(res))
    .then((suiviprestation) => suiviprestation ? suiviprestation.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Suiviprestation.findById(params.id)
    .then(notFound(res))
    .then((suiviprestation) => suiviprestation ? Object.assign(suiviprestation, body).save() : null)
    .then((suiviprestation) => suiviprestation ? suiviprestation.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Suiviprestation.findById(params.id)
    .then(notFound(res))
    .then((suiviprestation) => suiviprestation ? suiviprestation.remove() : null)
    .then(success(res, 204))
    .catch(next)
