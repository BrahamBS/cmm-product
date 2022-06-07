import { success, notFound } from '../../services/response/'
import { Actualite } from '.'
import { actualiteUpload } from '../../services/multer'
import { ObjectId } from 'Mongoose.Types.ObjectId'

export const create = ({ bodymen: { body } }, res, next) =>
  Actualite.create(body)
    .then((actualite) => actualite.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Actualite.count(query)
    .then(count => Actualite.find(query, select, cursor)
      .then((actualites) => ({
        count,
        rows: actualites.map((actualite) => actualite.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Actualite.findById(params.id)
    .then(notFound(res))
    .then((actualite) => actualite ? actualite.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Actualite.findById(params.id)
    .then(notFound(res))
    .then((actualite) => actualite ? Object.assign(actualite, body).save() : null)
    .then((actualite) => actualite ? actualite.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Actualite.findById(params.id)
    .then(notFound(res))
    .then((actualite) => actualite ? actualite.remove() : null)
    .then(success(res, 204))
    .catch(next)


export const uploadActualitePhoto = async (req, res, next) => {
  await actualiteUpload(req, res, async (error) => {
    if (error) {
      res.json({ error: error })
    }
    try {
      const uploadedPhoto = req.file
      const photoUrl = 'uploads/' + uploadedPhoto.filename
      const response = Actualite.findOneAndUpdate(
        {
          _id: ObjectId(req.params.id)
        }, { photoUrl: photoUrl }
      );
      res.json(response)
    } catch (error) {
      console.log(error)
      next(error)
    }
  })
}