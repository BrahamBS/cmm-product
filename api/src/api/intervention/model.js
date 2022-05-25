import mongoose, { Schema } from 'mongoose'

const interventionSchema = new Schema({
  titre: {
    type: String
  },
  dateDebut: {
    type: String
  },
  dateFin: {
    type: String
  },
  description: {
    type: String
  },
  beneficiaires: {
    type: String
  },
  prestataires: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

interventionSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      titre: this.titre,
      dateDebut: this.dateDebut,
      dateFin: this.dateFin,
      description: this.description,
      beneficiaires: this.beneficiaires,
      prestataires: this.prestataires,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Intervention', interventionSchema)

export const schema = model.schema
export default model
