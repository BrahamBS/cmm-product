import { DemandeIntervention } from '.'

let demandeIntervention

beforeEach(async () => {
  demandeIntervention = await DemandeIntervention.create({ etablissement: 'test', typeInter: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = demandeIntervention.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(demandeIntervention.id)
    expect(view.etablissement).toBe(demandeIntervention.etablissement)
    expect(view.typeInter).toBe(demandeIntervention.typeInter)
    expect(view.description).toBe(demandeIntervention.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = demandeIntervention.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(demandeIntervention.id)
    expect(view.etablissement).toBe(demandeIntervention.etablissement)
    expect(view.typeInter).toBe(demandeIntervention.typeInter)
    expect(view.description).toBe(demandeIntervention.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
