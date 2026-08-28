import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { hr } from './locales/hr';
import { en } from './locales/en';

const dictionaries = { hr, en };

export type Lang = keyof typeof dictionaries;
export type ServiceId = keyof typeof hr.services.items;
export type JobId = keyof typeof hr.careers.jobs;

const I18nContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof hr;
}>({ lang: 'hr', setLang: () => {}, t: hr });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(
    () => (localStorage.getItem('lang') as Lang | null) ?? 'hr'
  );

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n() {
  return useContext(I18nContext);
}
