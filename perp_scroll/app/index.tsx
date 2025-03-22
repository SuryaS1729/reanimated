import { View, Text } from 'react-native'
import React from 'react'
import VerticalList from '@/components/VerticalList'
import { mergeLocales } from '@faker-js/faker/.'
import mockData from '@/mockData'

const App = () => {
  return (
    <View>
      <VerticalList data={mockData}/>
    </View>
  )
}

export default App