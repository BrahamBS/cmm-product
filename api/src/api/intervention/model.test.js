import { Intervention } from '.'

let intervention

beforeEach(async () => {
  intervention = await Intervention.create({ titre: 'test', dateDebut: 'test', dateFin: 'test', description: 'test', beneficiaires: 'test', prestataires: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = intervention.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(intervention.id)
    expect(view.titre).toBe(intervention.titre)
    expect(view.dateDebut).toBe(intervention.dateDebut)
    expect(view.dateFin).toBe(intervention.dateFin)
    expect(view.description).toBe(intervention.description)
    expect(view.beneficiaires).toBe(intervention.beneficiaires)
    expect(view.prestataires).toBe(intervention.prestataires)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = intervention.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(intervention.id)
    expect(view.titre).toBe(intervention.titre)
    expect(view.dateDebut).toBe(intervention.dateDebut)
    expect(view.dateFin).toBe(intervention.dateFin)
    expect(view.description).toBe(intervention.description)
    expect(view.beneficiaires).toBe(intervention.beneficiaires)
    expect(view.prestataires).toBe(intervention.prestataires)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
