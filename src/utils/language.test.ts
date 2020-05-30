import { languages } from '../types'
import { getLanguage, setLanguage } from './language.utils'

test('Language', () => {
    setLanguage(languages.DANISH)
    const language = getLanguage()

    expect(language).toBe(languages.DANISH)
})
