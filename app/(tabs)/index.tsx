// import { Button } from 'react-native';
// import Animated, { withSpring } from 'react-native-reanimated';
// import { useSharedValue } from 'react-native-reanimated';
// import { View } from 'react-native';

// export default function App() {

//   const width= useSharedValue(100)
//   const handlePress=  ()=>{
//     width.value = withSpring(width.value+50)
//   }

//   return (
//     <View style = {{flex:1, alignItems:'center'}}>
//       <Animated.View
//         style={{
//           width: width,
//           height: 100,
//           borderRadius:10,
//           backgroundColor: 'red',
//         }}
//       />
//        <Button onPress={handlePress} title="Click me" />
//     </View>
//   );
// }

// import React from 'react';
// import { Button, View, StyleSheet } from 'react-native';
// import Animated, {
//   useSharedValue,
//   withSpring,
//   useAnimatedStyle,
// } from 'react-native-reanimated';

// export default function App() {
//   const translateY = useSharedValue<number>(20);

//   const handlePress = () => {
//     translateY.value += 50;
//   };

//   const animatedStyles = useAnimatedStyle(() => ({
//     transform: [{ translateY: withSpring(translateY.value*5 ) }],
//   }));

//   return (
//     <>
//       <Animated.View style={[styles.box, animatedStyles]} />
//       <View style={styles.container}>
//         <Button onPress={handlePress} title="Click me" />
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     height: 120,
//     width: 120,
//     backgroundColor: '#b58df1',
//     borderRadius: 20,
//     marginVertical: 50,
//   },
// });

// import React from 'react';
// import { Button, View, StyleSheet } from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedProps,
//   withTiming,
//   withSpring
// } from 'react-native-reanimated';
// import { Svg, Circle } from 'react-native-svg';

// const AnimatedCircle = Animated.createAnimatedComponent(Circle);

// export default function App() {
//   const l = useSharedValue<number>(20);

//   const handlePress = () => {
//     l.value += 10;
//   };

//   const animatedProps = useAnimatedProps(() => ({
//     r: withTiming(l.value),
//   }));

//   return (
//     <View style={styles.container}>
//       <Svg style={styles.svg}>
//         <AnimatedCircle
//           cx="50%"
//           cy="50%"
//           fill="#b58df1"
//           animatedProps={animatedProps}
//         />
//       </Svg>
//       <Button onPress={handlePress} title="Click me" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   svg: {
//     height: 250,
//     width: '100%',
//   },
// });


// import Animated, {
//   useSharedValue,
//   withTiming,
//   useAnimatedStyle,
//   Easing,
// } from 'react-native-reanimated';
// import { View, Button, StyleSheet } from 'react-native';

// export default function AnimatedStyleUpdateExample() {
//   const randomWidth = useSharedValue(10);

//   const config = {
//     duration: 500,
//     easing: Easing.bezier(0.5, 0.01, 0, 1),
//   };

//   const style = useAnimatedStyle(() => {
//     return {
//       width: withTiming(randomWidth.value, config),
//     };
//   });

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.box, style]} />
//       <Button
//         title="toggle"
//         onPress={() => {
//           randomWidth.value = Math.random() * 350;
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     width: 100,
//     height: 80,
//     backgroundColor: 'white',
//     margin: 30,
//   },
// });
