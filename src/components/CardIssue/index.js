//@flow
import React, { memo } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { ButtonDeveloperSub, CardBorder, ButtonComments, H1, Body, Space } from '..'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

type Props = {
  obj: {
    title: string,
    description: string,
    uri: string,
    name: string,
    comments: number,
    rate: number
  },
  onPress: Function
}

const CardIssue = memo<Props>(({ obj, onPress }) => {
  const { container } = styles
  const { title, description, name, comments, uri, rate } = obj
  return (
    <>
      <CardBorder>
        <TouchableOpacity onPress={onPress}>
          <H1 title={title} viewStyle={{ marginTop: 25 }} numberOfLines={1} ellipsizeMode="tail" />
          <Space height={10} />
          <Body title={description} numberOfLines={4} ellipsizeMode="tail" />
          <Space height={15} />
        </TouchableOpacity>
        <ButtonComments title={comments} viewStyle={{ paddingLeft: 5 }} />
        <View style={container}>
          <ButtonDeveloperSub title={name} uri={uri} rate={rate} />
        </View>
      </CardBorder>
    </>
  )
})

export { CardIssue }
