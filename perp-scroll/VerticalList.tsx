
import { View, Text, FlatList, Dimensions, Image } from 'react-native'
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
const _itemFullSize = _itemSize + _spacing*2


function AnimatedCard({item}:AnimatedCardProps){
    return(
        <View style={{backgroundColor:'white', flex:1, height:_itemSize, padding:_spacing*2, borderRadius:10, gap: _spacing}}>
          <Image 
           source={{uri:item.image}}
           style={{flex:1, height:_itemSize*0.4}}/>
           <View style={{gap: _spacing/2}}>
            <Text style={{fontWeight:'bold', fontSize:20}} >{item.title}</Text>
            <Text numberOfLines={3}>{item.description}</Text>
           </View>
           <View style={{flexDirection:'row', alignItems:'center', gap:_spacing*2}}>
            <Image 
            source={{uri:item.author.avatar}}
            style={{width:24,aspectRatio:1, borderRadius:15}}/>
            <Text style={{color:'gray' , fontSize:12}}>{item.author.name}</Text>
           </View>
        </View>
    )

}
const VerticalList = ({data}:VerticalListProps) => {
  return (
    
    <FlatList
    data={data}
    contentContainerStyle={{padding:_spacing*3, gap: _spacing*2}}
    renderItem={({item}) => (
        <AnimatedCard item = {item}/>
  )}
  snapToInterval={_itemFullSize}

  decelerationRate={'fast'}
  showsVerticalScrollIndicator={false}

    />
  )
}

export default VerticalList