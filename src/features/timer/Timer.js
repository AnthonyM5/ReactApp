import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';



import { colors }  from '../../utils/Colors';
import { spacing }  from '../../utils/Sizes';
import { Countdown } from '../../components/Countdown'
import { RoundedButton } from '../../components/RoundedButton'


export const Timer = ({focusSubject}) => {
  const [isStarted, setIsStarted] = useState(false)

  return (
    <View style={styles.container}>
    <View style={styles.countdown}>
      <Countdown isPaused={!isStarted}/>
    </View>
    <View style={{paddingTop: spacing.xxl}}>
    <Text style={styles.title}>Focusing On:</Text>
    <Text style={styles.task}>{focusSubject}</Text>
    </View> 
    <View style={styles.buttons}>
    {isStarted ? <RoundedButton title="Pause" onPress={ () => setIsStarted(false)}/> : <RoundedButton title="Start" onPress={ () => setIsStarted(true)}/>}
    </View>
    
    </View>
  )
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: 'center'
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justify: 'center'
  },
  buttons: {
    flex: 0.3,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
  
})