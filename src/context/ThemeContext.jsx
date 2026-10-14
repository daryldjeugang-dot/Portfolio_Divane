import { createContext, useContext } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const theme = 'dark'

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
