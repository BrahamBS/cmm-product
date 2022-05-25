import { Suiviprestation } from '.'

let suiviprestation

beforeEach(async () => {
  suiviprestation = await Suiviprestation.create({ prestataire: 'test', dateFacture: 'test', objetFacture: 'test', etat: 'test', observation: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = suiviprestation.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(suiviprestation.id)
    expect(view.prestataire).toBe(suiviprestation.prestataire)
    expect(view.dateFacture).toBe(suiviprestation.dateFacture)
    expect(view.objetFacture).toBe(suiviprestation.objetFacture)
    expect(view.etat).toBe(suiviprestation.etat)
    expect(view.observation).toBe(suiviprestation.observation)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = suiviprestation.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(suiviprestation.id)
    expect(view.prestataire).toBe(suiviprestation.prestataire)
    expect(view.dateFacture).toBe(suiviprestation.dateFacture)
    expect(view.objetFacture).toBe(suiviprestation.objetFacture)
    expect(view.etat).toBe(suiviprestation.etat)
    expect(view.observation).toBe(suiviprestation.observation)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
