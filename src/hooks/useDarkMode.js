import { useEffect, useState, useCallback } from 'react'

const useDarkMode = () => {
  let [theme, setTheme] = useState('light')

  const toggleTheme = useCallback(() => {
    if (theme === 'light') {
      localStorage.setItem('rickboothdotme-theme', 'dark')
      setTheme('dark')
    } else {
      localStorage.setItem('rickboothdotme-theme', 'light')
      setTheme('light')
    }
  }, [theme])

  useEffect(() => {
    const localTheme = localStorage.getItem('rickboothdotme-theme')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  return [theme, toggleTheme]
}

export default useDarkMode
