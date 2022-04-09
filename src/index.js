import React, { useEffect } from 'react'
import Amplify from '@aws-amplify/core'
import * as Keychain from 'react-native-keychain'
import { ThemeProvider } from './ThemeProvider'
import { LogBox } from 'react-native'
import { DarkTheme, LightTheme } from './APIComponents'
import { useColorScheme } from 'react-native-appearance'
import AppNavigator from './AppNavigator'
import awsconfig from './aws-exports'

const MEMORY_KEY_PREFIX = '@MyStorage:'
let dataMemory = {}

class MyStorage {
  static syncPromise = null

  static setItem(key, value) {
    Keychain.setGenericPassword(MEMORY_KEY_PREFIX + key, value)
    dataMemory[key] = value
    return dataMemory[key]
  }

  static getItem(key) {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined
  }

  static removeItem(key) {
    Keychain.resetGenericPassword()
    return delete dataMemory[key]
  }

  static clear() {
    dataMemory = {}
    return dataMemory
  }
}

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: false
  },
  storage: MyStorage
})

const App = () => {
  const scheme = useColorScheme()
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`'])
  }, [])
  return (
    <>
      <ThemeProvider theme={scheme === 'dark' ? DarkTheme : LightTheme}>
        <AppNavigator />
      </ThemeProvider>
    </>
  )
}

export default App
