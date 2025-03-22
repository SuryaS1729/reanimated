
import { View, Text, FlatList, Dimensions } from 'react-native'
import React from 'react'
import { Item } from '@/mockData'
type VerticalListProps = {
    data: Item[]
}

type AnimatedCardProps = {
    item: Item
}
const {height} = Dimensions.get('screen')
const _spacing = 4
const _itemSize = height* 0.72

function AnimatedCard({item}:AnimatedCardProps){
    return(
        <View style={{backgroundColor:item.bg, flex:1, height:_itemSize, padding:_spacing}}/>
    )

}
const VerticalList = ({data}:VerticalListProps) => {
  return (
    <FlatList
    data={data}
    renderItem={({item}) => (
        <AnimatedCard item = {item}/>
  )}

    />
  )
}

export default VerticalList