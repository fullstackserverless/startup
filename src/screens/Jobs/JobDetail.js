import React from 'react'
import { Platform } from 'react-native'
import { AppContainer, CardVacancies, Space, Header } from 'react-native-unicorn-uikit'
import { goBack } from '../../constants'

const JobDetail = ({ route, navigation }) => {
  return (
    <AppContainer>
      <Header onPress={goBack(navigation)} iconLeft="angle-dobule-left" />
      <CardVacancies obj={route.params} detail />
      <Space height={Platform.OS === 'ios' ? 100 : 30} />
    </AppContainer>
  )
}

export { JobDetail }
