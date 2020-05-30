import { IConfigurationInput } from '../types'
import { setConfiguration } from './configuration.utils'

export const initialize = (configuration: IConfigurationInput) => {
    setConfiguration(configuration)
}
