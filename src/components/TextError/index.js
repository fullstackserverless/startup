import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10
  },
  h1: {
    color: 'red',
    fontFamily: '3270Narrow',
    fontSize: 13
  }
})

const TextError = memo(({ title, onPress }) => {
  const { container, h1 } = styles
  return (
    <View style={container}>
      <Text style={h1} onPress={onPress}>
        {title}
      </Text>
    </View>
  )
})

export { TextError }
