import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Focus } from './src/features/focus/Focus'



export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.titleContainer}>
    <Text style={styles.title}>Hello World!</Text>
    </View>
    <Focus />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  titleContainer: {
    flexDirection: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  }
  
});
