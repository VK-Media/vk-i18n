import { IConfigurationInput } from '../types/i18n.types'
import { setConfiguration } from './configuration.utils'

export const initialize = (configuration: IConfigurationInput) => {
    setConfiguration(configuration)
}
