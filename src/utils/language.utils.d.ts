import { languages } from '../types/i18n.types';
export declare const getTranslations: () => import("../types/i18n.types").ITranslations | null;
export declare const getLanguage: () => string;
export declare const setLanguage: (language: languages) => void;
