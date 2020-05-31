import React, { useState } from 'react'
import { API, graphqlOperation, Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { AppContainer, Space, Button, Input, TextError } from 'react-native-unicorn-uikit'

import { View, StyleSheet } from 'react-native'
import { onScreen, goBack } from '../../../constants'
import { createUser } from '../../../graphql/mutations'
import { RadioGroup } from '../../../components'

const ROLLS = [
  {
    label: 'Developer',
    value: 'developer'
  },
  {
    label: 'HeadHunter',
    value: 'headHunter'
  }
]

const styles = StyleSheet.create({
  checkboxContainer: {
    alignSelf: 'center'
  }
})

const RollSignup = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [role, setRole] = useState('developer')
  const [error, setError] = useState('')

  const _onPress = async (values) => {
    setLoading(true)
    setError('')
    const { firstName, lastName } = values
    const input = { firstName, lastName, role }
    try {
      const credentials = await Keychain.getInternetCredentials('auth')
      if (credentials) {
        const { username, password } = credentials
        await Auth.signIn(username, password)
        const user = await API.graphql(graphqlOperation(createUser, { input }))
        user && user.data && onScreen("USER",navigation)()
      }
    } catch (e) {
      setError('Error in creating new user!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <AppContainer onPress={goBack(navigation)} title="Roll" loading={loading}>
        <Space height={80} />
        <Formik
          initialValues={{ firstName: '', lastName: '' }}
          onSubmit={(values) => _onPress(values)}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().required(),
            lastName: Yup.string().required()
          })}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <>
              <Input
                name="firstName"
                value={values.firstName}
                onChangeText={handleChange('firstName')}
                onBlur={() => setFieldTouched('firstName')}
                placeholder="First name"
                touched={touched}
                errors={errors}
                autoCapitalize="none"
              />
              <Input
                name="lastName"
                value={values.lastName}
                onChangeText={handleChange('lastName')}
                onBlur={() => setFieldTouched('lastName')}
                placeholder="Last name"
                touched={touched}
                errors={errors}
              />
              <Space height={20} />
              <View style={styles.checkboxContainer}>
                <RadioGroup
                  items={ROLLS}
                  currentValue={role}
                  onItemChanged={(v) => {
                    setRole(v)
                  }}
                />
              </View>
              <Space height={30} />
              {!!error && <TextError title={error} textStyle={{ alignSelf: 'center' }} />}
              <Button title="SELECT" disabled={!isValid} onPress={handleSubmit} formik />
            </>
          )}
        </Formik>
      </AppContainer>
    </>
  )
}

export { RollSignup }
