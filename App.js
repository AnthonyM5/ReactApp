import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { colors }  from './src/utils/Colors'
import { spacing } from './src/utils/Sizes'
import { Timer } from './src/features/timer/Timer';

import { FocusHistory } from './src/features/focus/FocusHistory'


export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([])

  const STATUSES = {
    COMPLETE: 1,
    CANCELLED: 2
  }

  const addSubjectWithState = (subject, status) => {
    setFocusHistory([...focusHistory, {subject, status}])
  }

  const onClear = () => {
    setFocusHistory([])
  }

  return (
    <View style={styles.container}>
      {focusSubject ? <Timer focusSubject={focusSubject} 
        onTimerEnd={ () => {
          addSubjectWithState(focusSubject, STATUSES.COMPLETE)
          setFocusSubject(null)
        }}
        clearSubject={ () => {
          addSubjectWithState(focusSubject, STATUSES.CANCELLED)
          setFocusSubject(null)
        }}
        /> : (
        <>
          <Focus addSubject={setFocusSubject}/> 
          <FocusHistory focusHistory={focusHistory} onClear={onClear}/>
        </>
        )}
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
