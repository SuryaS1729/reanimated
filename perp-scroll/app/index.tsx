import { View, Text } from 'react-native'
import React from 'react'
import VerticalList from '@/VerticalList'
import { mergeLocales } from '@faker-js/faker/.'
import mockData from '@/mockData'
import { StatusBar } from 'expo-status-bar';
const App = () => {
  return (
  
    <View style={{flex:1, backgroundColor:'black'}}>
       <StatusBar
        style="dark" // Or "light" depending on your content's background
        translucent={true}
        backgroundColor="transparent"
      />
      <VerticalList data={mockData}/>
      
    </View>
  )
}

export default App