import { languages } from '../types/i18n.types'
import { getLanguage, setLanguage } from './language.utils'

test('Language', () => {
    setLanguage(languages.DANISH)
    const language = getLanguage()

    expect(language).toBe(languages.DANISH)
})
