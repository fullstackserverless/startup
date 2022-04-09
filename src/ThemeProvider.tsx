import React, { memo } from 'react'
import { AppearanceProvider } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'

interface ThemeProviderT {
  children?: React.ReactNode
  theme: {}
}

const ThemeProvider = memo<ThemeProviderT>(({ children, theme }) => {
  return (
    <>
      <AppearanceProvider>
        <NavigationContainer theme={theme}>{children}</NavigationContainer>
      </AppearanceProvider>
    </>
  )
})

export { ThemeProvider }
