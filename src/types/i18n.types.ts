export enum languages {
    ENGLISH = 'en',
    DANISH = 'da'
}

export interface ITranslationsObjects {
    [key: string]: ITranslations
}

export interface ITranslations {
    [key: string]: string
}

export interface IConfigurationInput {
    fallbackLanguage?: languages
    translations?: ITranslationsObjects
}

export interface IConfiguration {
    fallbackLanguage: languages
    translations?: ITranslationsObjects
}
