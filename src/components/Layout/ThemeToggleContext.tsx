import React from 'react'

const ThemeToggleContext = React.createContext<{ toggleTheme?: any; theme?: any; toggleRef?: any }>(
    undefined
)

export default ThemeToggleContext
