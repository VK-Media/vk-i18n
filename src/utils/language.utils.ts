import { languages } from '../types/i18n.types'
import { getConfiguration } from './configuration.utils'
import { getLanguageFromLocalStorage, setLanguageInLocalStorage } from './localStorage.utils'

export const getLanguage = (): string => {
    const language = getLanguageFromLocalStorage()

    if (language) return language

    const browserLanguage = getLanguageFromBrowser()

    if (browserLanguage) {
        setLanguageInLocalStorage(browserLanguage)
        return browserLanguage
    }

    const configuration = getConfiguration()
    return configuration.fallbackLanguage
}

export const setLanguage = (language: languages) => {
    setLanguageInLocalStorage(language)
}

const getLanguageFromBrowser = () => {
    return navigator.language
}
