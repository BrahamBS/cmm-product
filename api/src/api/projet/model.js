import mongoose, { Schema } from 'mongoose'

const projetSchema = new Schema({
  titre: {
    type: String
  },
  description: {
    type: String
  },
  photoUrl: {
    type: String
  },
  dateDebut: {
    type: String
  },
  dateFin: {
    type: String
  },
  emplacement: {
    type: String
  },
  nature: {
    type: String
  },
  suiveurs: {
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

projetSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      titre: this.titre,
      description: this.description,
      photoUrl: this.photoUrl,
      dateDebut: this.dateDebut,
      dateFin: this.dateFin,
      emplacement: this.emplacement,
      nature: this.nature,
      suiveurs: this.suiveurs,
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

const model = mongoose.model('Projet', projetSchema)

export const schema = model.schema
export default model
