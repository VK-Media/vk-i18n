import { initialize } from './setup.utils'

test('Initialization', () => {
    const t = initialize()

    expect(t).toBeTruthy()
})
