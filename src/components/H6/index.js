// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'
import { W } from '../constants'

const styles = StyleSheet.create({
  h: {
    width: W - 90,
    textAlign: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  }
})

type H6T = {
  title: string,
  textStyle: TextStyleProp
}

const H6 = memo<H6T>(({ title, textStyle }) => {
  const { h } = styles
  const {
    h6: { fontFamily, fontSize, color },
    colors: { secondary }
  } = useTheme()
  const size = Platform.OS === 'ios' ? 13 : 13
  return (
    <Text style={[h, textStyle, { fontFamily, color, fontSize: fontSize || size, textShadowColor: secondary }]}>
      {title}
    </Text>
  )
})

export { H6 }
