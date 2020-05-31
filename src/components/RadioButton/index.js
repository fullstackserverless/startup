// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Icon from 'react-native-vector-icons/AntDesign'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  textStyle: {
    fontSize: Platform.OS === 'ios' ? 20 : 25,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  }
})

type Props = {
  initialIsChecked: boolean,
  isChecked: boolean,
  title: string,
  onPress: () => void
}

const RadioButton = memo<Props>((props) => {
  const { initialIsChecked, isChecked, title, onPress } = props
  const {
    h1: { fontFamily, color },
    colors: { secondary }
  } = useTheme()
  const textStyle = [styles.textStyle, { fontFamily, color, textShadowColor: secondary }]
  const iconComponent = isChecked ? <Icon name="check" size={20} color={secondary} /> : null
  return (
    <BouncyCheckbox
      isChecked={initialIsChecked}
      checkboxSize={20}
      textStyle={textStyle}
      text={title}
      disableTextDecoration
      fillColor="transparent"
      unfillColor="transparent"
      borderColor={secondary}
      onPress={onPress}
      iconComponent={iconComponent}
    />
  )
})

export default RadioButton
