import mongoose, { Schema } from 'mongoose'

const demandeInterventionSchema = new Schema({
  etablissement: {
    type: String
  },
  typeInter: {
    type: String
  },
  description: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

demandeInterventionSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      etablissement: this.etablissement,
      typeInter: this.typeInter,
      description: this.description,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('DemandeIntervention', demandeInterventionSchema)

export const schema = model.schema
export default model
