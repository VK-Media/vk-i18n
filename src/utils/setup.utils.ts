import { IConfiguration, ITranslations } from '../types/i18n.types'
import { getConfiguration, setConfiguration } from './configuration.utils'
import { getLanguage } from './language.utils'

export const initialize = (configuration: IConfiguration = getConfiguration()) => {
    setConfiguration(configuration)

    let translations: ITranslations = {}
    const language: string = getLanguage()
    const translationsObjects = configuration.translations

    if (translationsObjects) {
        if (translationsObjects[language]) {
            translations = translationsObjects[language]
        } else {
            console.error(`No translations for language: ${language}`)
        }
    } else {
        console.error('No translations objects are set')
    }

    return (key: string): string => {
        if (translations.hasOwnProperty(key)) {
            return translations[key]
        }

        if (process.env.NODE_ENV === 'development') {
            console.warn(`No translation key: "${key}", in language: "${language}"`)
        }

        return key
    }
}
