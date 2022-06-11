import mongoose, { Schema } from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'

const interventionSchema = new Schema({
  titre: {
    type: String
  },
  dateDebut: {
    type: String,
    default: new Date()
  },
  dateFin: {
    type: String
  },
  description: {
    type: String
  },
  nature:{
    type:String
  },
  beneficiaires: {
    type: String
  },
  prestataires: {
    type: String
  },
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
      nature:this.nature,
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

interventionSchema.plugin(mongooseKeywords, { paths: [
  'titre', 'dateDebut','dateFin','description',
  'beneficiaires','prestataires','nature'] })

const model = mongoose.model('Intervention', interventionSchema)

export const schema = model.schema
export default model
