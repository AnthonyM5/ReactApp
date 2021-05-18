import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper'


import { colors }  from '../../utils/Colors';
import { spacing }  from '../../utils/Sizes';
import { Countdown } from '../../components/Countdown'
import { RoundedButton } from '../../components/RoundedButton'
import { Timing } from './Timing'


export const Timer = ({focusSubject}) => {
  const [minutes, setMinutes] = useState(0.1)
  const [isStarted, setIsStarted] = useState(false)
  const [progress, setProgress] = useState(1)

  const onProgress = (progress) => {
    setProgress(progress)
  }

  const changeTime = (min) => {
    setMinutes(min)
    setProgress(1)
    setIsStarted(false)
  }

  return (
    <View style={styles.container}>
    <View style={styles.countdown}>
      <Countdown minutes={minutes} isPaused={!isStarted} onProgress={onProgress} />
    </View>
    <View style={{paddingTop: spacing.xxl}}>
    <Text style={styles.title}>Focusing On:</Text>
    <Text style={styles.task}>{focusSubject}</Text>
    </View> 
    <View style={{paddingTop: spacing.sm}}> 
    <ProgressBar
    progress={progress} 
    color="#5E84E2"
    style={{
    height: 10,}}/>
    </View>
    <View style={styles.buttons}>
      <Timing onChangeTime={changeTime} />
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
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
  
})