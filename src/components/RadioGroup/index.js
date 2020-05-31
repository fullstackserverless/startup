// @flow
import React, { memo } from 'react'
import RadioButton from '../RadioButton'

type RadioItem = {
  label: string,
  value: string
}

type Props = {
  items: RadioItem[],
  currentValue: string,
  onItemChanged: (value: string) => void
}

const RadioGroup = memo<Props>((props) => {
  const { items, currentValue, onItemChanged } = props
  return items.map(({ value, label }) => (
    <RadioButton
      key={value}
      title={label}
      initialIsChecked={currentValue === value}
      isChecked={currentValue === value}
      onPress={() => {
        if (currentValue !== value) {
          onItemChanged(value)
        }
      }}
    />
  ))
})

export default RadioGroup
