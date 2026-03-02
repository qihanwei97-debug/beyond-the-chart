import { ui, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'zh';
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui.zh): string {
    return ui[lang][key] ?? ui.zh[key];
  };
}

export function getLocalePath(path: string, lang: Lang): string {
  if (lang === 'zh') return path;
  return `/en${path}`;
}
