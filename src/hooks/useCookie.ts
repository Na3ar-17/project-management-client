import { useState, useCallback } from 'react'
import Cookies from 'js-cookie'

type UseCookieReturnType = [string, (newValue: string) => void, () => void]

export default function useCookie(
  name: string,
  defaultValue: string
): UseCookieReturnType {
  const [value, setValue] = useState<string>(() => {
    const cookie = Cookies.get(name)
    if (cookie) return cookie
    Cookies.set(name, defaultValue)
    return defaultValue
  })

  const updateCookie = useCallback(
    (newValue: string) => {
      Cookies.set(name, newValue)
      setValue(newValue)
    },
    [name]
  )

  const deleteCookie = useCallback(() => {
    Cookies.remove(name)
    setValue(defaultValue)
  }, [name, defaultValue])

  return [value, updateCookie, deleteCookie]
}
