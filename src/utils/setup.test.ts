import { initialize } from './setup.utils'

test('Initialization', () => {
    const initialized = initialize({ translations: { en: { 'test': 'test' } } })

    expect(initialized).toBeFalsy()
})
