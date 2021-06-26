import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { colors }  from './src/utils/Colors'
import { spacing } from './src/utils/Sizes'
import { Timer } from './src/features/timer/Timer';


export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      {focusSubject ? <Timer focusSubject={focusSubject} onTimerEnd={ () => {
        setFocusSubject(null)
      }}/> : (<Focus addSubject={setFocusSubject}/>) }
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
    padding: 10,
    paddingTop: Platform.OS === 'ios'? spacing.md : spacing.lg
  }
  
});
