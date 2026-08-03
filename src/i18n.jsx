import { useEffect, useState } from 'react'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import useActiveLocale from './hooks/useActiveLocale'

// Lingui v5: 内置复数处理，不再需要 make-plural
i18n.loadLocaleData({
  en: { plurals: (n) => (n === 1 ? 'one' : 'other') },
  zh: { plurals: () => 'other' },
})

export async function dynamicActivate(locale) {
  const { messages } = await import(`./locales/${locale}/messages.js`)
  i18n.load(locale, messages)
  i18n.activate(locale)
}

export function LanguageProvider({ children }) {
  const { locale } = useActiveLocale()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    dynamicActivate(locale)
      .then(() => {
        setLoaded(true)
      })
      .catch((error) => {
        console.error('Failed to activate locale', locale, error)
      })
  }, [locale])

  if (!loaded) return null

  return (
    <I18nProvider forceRenderOnLocaleChange={false} i18n={i18n}>
      {children}
    </I18nProvider>
  )
}
