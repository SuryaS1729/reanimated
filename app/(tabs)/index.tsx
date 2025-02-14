import { Button } from 'react-native';
import Animated, { withSpring } from 'react-native-reanimated';
import { useSharedValue } from 'react-native-reanimated';
import { View } from 'react-native';

export default function App() {

  const width= useSharedValue(100)
  const handlePress=  ()=>{
    width.value = withSpring(width.value+50)
  }

  return (
    <View style = {{flex:1, alignItems:'center'}}>
      <Animated.View
        style={{
          width: width,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
       <Button onPress={handlePress} title="Click me" />
    </View>
  );
}