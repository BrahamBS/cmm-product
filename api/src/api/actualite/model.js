import mongoose, { Schema } from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'

const actualiteSchema = new Schema({
  titre: {
    type: String,
    required: true
  },
  photoUrl: {
    type: String,
  },
  contenue: {
    type: String,
    required: true
  },
  isFeatured: {
    type: Boolean,
    default:false
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

actualiteSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      titre: this.titre,
      photoUrl: this.photoUrl,
      contenue: this.contenue,
      isFeatured: this.isFeatured,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

actualiteSchema.plugin(mongooseKeywords, { paths: ['titre', 'contenue'] })

const model = mongoose.model('Actualite', actualiteSchema)

export const schema = model.schema
export default model
