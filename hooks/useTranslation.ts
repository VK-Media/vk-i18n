import { getLanguage, getTranslations } from '../utils/language.utils'

export const useTranslation = () => {
    const language = getLanguage()
    const translations = getTranslations()

    return {
        t: (key: string): string => {
            if (translations) {
                if (translations.hasOwnProperty(key)) {
                    return translations[key]
                }

                if (process.env.NODE_ENV === 'development') {
                    console.warn(`No translation key: "${key}", in language: "${language}"`)
                }
            } else {
                console.error('The package has not yet been initialized')
            }

            return key
        }
    }
}
