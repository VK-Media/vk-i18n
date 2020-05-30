import { IConfiguration, IConfigurationInput, languages } from '../types'

const configuration: IConfiguration = {
    fallbackLanguage: languages.ENGLISH
}

export const setConfiguration = (configurationInput: IConfigurationInput) => {
    Object.assign(configuration, configurationInput)
}

export const getConfiguration = (): IConfiguration => {
    return configuration
}
