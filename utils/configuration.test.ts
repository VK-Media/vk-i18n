import { getConfiguration } from './configuration.utils'

test('Configuration', () => {
    const configuration = getConfiguration()

    expect(configuration).toBeTruthy()
})
