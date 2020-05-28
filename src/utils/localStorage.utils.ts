export const getLanguageFromLocalStorage = (): string | null => {
    return localStorage.getItem('i18n-lang')
}

export const setLanguageInLocalStorage = (language: string) => {
    localStorage.setItem('i18n-lang', language)
}
