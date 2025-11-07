import { reactive, watch } from 'vue';
import { LOCALES } from '@/data/staff';

function initialLocale() {
  try {
    const saved = localStorage.getItem('locale');
    if (saved && LOCALES.includes(saved)) return saved;
  } catch (_) {}
  return 'en';
}

export const localeStore = reactive({
  locale: initialLocale()
});

watch(() => localeStore.locale, (newLoc) => {
  try {
    document.documentElement.setAttribute('lang', newLoc === 'el' ? 'el' : 'en');
  } catch (_) {}
});

// set initial lang
try { document.documentElement.setAttribute('lang', localeStore.locale === 'el' ? 'el' : 'en'); } catch (_) {}

export function setLocale(loc) {
  if (LOCALES.includes(loc)) {
    localeStore.locale = loc;
    try { localStorage.setItem('locale', loc); } catch (_) {}
  }
}

export { LOCALES };
