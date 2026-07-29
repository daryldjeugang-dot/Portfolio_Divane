import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'
import fr from '../locales/fr.json'

const LanguageContext = createContext()

function flatten(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix ? `${prefix}.` : ''
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      Object.assign(acc, flatten(obj[k], `${pre}${k}`))
    } else {
      acc[`${pre}${k}`] = obj[k]
    }
    return acc
  }, {})
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'fr')
  const [data, setData] = useState(fr)
  const flatRef = useRef(flatten(fr))

  useEffect(() => {
    if (lang === 'fr') {
      setData(fr)
      flatRef.current = flatten(fr)
    } else {
      import(`../locales/en.json`).then(m => {
        const d = m.default || m
        setData(d)
        flatRef.current = flatten(d)
      })
    }
  }, [lang])

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = useCallback((key, params) => {
    if (params?.returnObjects) {
      return key.split('.').reduce((acc, part) => acc?.[part], data) ?? []
    }
    let val = flatRef.current[key]
    if (val === undefined) return key
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        val = String(val).replace(`{{${k}}}`, v)
      })
    }
    return val
  }, [data])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  return useContext(LanguageContext)
}
