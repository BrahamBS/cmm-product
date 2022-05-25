import { success, notFound } from '../../services/response/'
import { Projet } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Projet.create(body)
    .then((projet) => projet.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Projet.count(query)
    .then(count => Projet.find(query, select, cursor)
      .then((projets) => ({
        count,
        rows: projets.map((projet) => projet.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Projet.findById(params.id)
    .then(notFound(res))
    .then((projet) => projet ? projet.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Projet.findById(params.id)
    .then(notFound(res))
    .then((projet) => projet ? Object.assign(projet, body).save() : null)
    .then((projet) => projet ? projet.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Projet.findById(params.id)
    .then(notFound(res))
    .then((projet) => projet ? projet.remove() : null)
    .then(success(res, 204))
    .catch(next)
