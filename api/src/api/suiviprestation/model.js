import mongoose, { Schema } from 'mongoose'

const suiviprestationSchema = new Schema({
  prestataire: {
    type: String
  },
  dateFacture: {
    type: String
  },
  objetFacture: {
    type: String
  },
  etat: {
    type: String
  },
  observation: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

suiviprestationSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      prestataire: this.prestataire,
      dateFacture: this.dateFacture,
      objetFacture: this.objetFacture,
      etat: this.etat,
      observation: this.observation,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Suiviprestation', suiviprestationSchema)

export const schema = model.schema
export default model
