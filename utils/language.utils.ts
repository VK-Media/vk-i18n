import { languages } from '../types'
import { getConfiguration } from './configuration.utils'
import { getLanguageFromLocalStorage, setLanguageInLocalStorage } from './localStorage.utils'

export const getTranslations = () => {
    const configuration = getConfiguration()
    const language: string = getLanguage()
    const translationsObjects = configuration.translations

    if (translationsObjects) {
        if (translationsObjects[language]) {
            return translationsObjects[language]
        } else {
            console.error(`No translations for language: ${language}`)
        }
    } else {
        console.error('No translations objects are set')
    }

    return null
}

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
