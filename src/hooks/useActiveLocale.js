import { useContext } from 'react'
import { Context } from '../contexts/AppState'

function useActiveLocale () {
  const { locale, setLocale } = useContext(Context)
  return { locale, setLocale }
}

export default useActiveLocale
