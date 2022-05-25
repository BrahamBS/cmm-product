import { Actualite } from '.'

let actualite

beforeEach(async () => {
  actualite = await Actualite.create({ titre: 'test', photoUrl: 'test', contenue: 'test', isFeatured: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = actualite.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(actualite.id)
    expect(view.titre).toBe(actualite.titre)
    expect(view.photoUrl).toBe(actualite.photoUrl)
    expect(view.contenue).toBe(actualite.contenue)
    expect(view.isFeatured).toBe(actualite.isFeatured)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = actualite.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(actualite.id)
    expect(view.titre).toBe(actualite.titre)
    expect(view.photoUrl).toBe(actualite.photoUrl)
    expect(view.contenue).toBe(actualite.contenue)
    expect(view.isFeatured).toBe(actualite.isFeatured)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
