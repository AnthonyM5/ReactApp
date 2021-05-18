import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { colors } from './src/utils/Colors'


export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
    {focusSubject ? (<Text>Here is timer</Text>) : (<Focus addSubject={setFocusSubject}/>) }
    <Text>{focusSubject}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
    padding: 10,
  }
  
});
