import { Projet } from '.'

let projet

beforeEach(async () => {
  projet = await Projet.create({ titre: 'test', description: 'test', photoUrl: 'test', dateDebut: 'test', dateFin: 'test', emplacement: 'test', nature: 'test', suiveurs: 'test', prestataires: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = projet.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(projet.id)
    expect(view.titre).toBe(projet.titre)
    expect(view.description).toBe(projet.description)
    expect(view.photoUrl).toBe(projet.photoUrl)
    expect(view.dateDebut).toBe(projet.dateDebut)
    expect(view.dateFin).toBe(projet.dateFin)
    expect(view.emplacement).toBe(projet.emplacement)
    expect(view.nature).toBe(projet.nature)
    expect(view.suiveurs).toBe(projet.suiveurs)
    expect(view.prestataires).toBe(projet.prestataires)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = projet.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(projet.id)
    expect(view.titre).toBe(projet.titre)
    expect(view.description).toBe(projet.description)
    expect(view.photoUrl).toBe(projet.photoUrl)
    expect(view.dateDebut).toBe(projet.dateDebut)
    expect(view.dateFin).toBe(projet.dateFin)
    expect(view.emplacement).toBe(projet.emplacement)
    expect(view.nature).toBe(projet.nature)
    expect(view.suiveurs).toBe(projet.suiveurs)
    expect(view.prestataires).toBe(projet.prestataires)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
