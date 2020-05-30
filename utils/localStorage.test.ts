import { languages } from '../types'
import { getLanguageFromLocalStorage, setLanguageInLocalStorage } from './localStorage.utils'

test('Local Storage', () => {
    setLanguageInLocalStorage(languages.ENGLISH)
    const language = getLanguageFromLocalStorage()

    expect(language).toBe(languages.ENGLISH)
})
