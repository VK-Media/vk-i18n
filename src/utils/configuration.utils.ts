import { IConfiguration, IConfigurationInput, languages } from '../types/i18n.types'

const configuration: IConfiguration = {
    fallbackLanguage: languages.ENGLISH
}

export const setConfiguration = (configurationInput: IConfigurationInput) => {
    Object.assign(configuration, configurationInput)
}

export const getConfiguration = (): IConfiguration => {
    return configuration
}
