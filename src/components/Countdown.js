import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { fontSizes, spacing } from '../utils/Sizes';
import { colors } from '../utils/Colors';

const minutesToMil = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 20, onProgress, isPaused, onEnd }) => {
  const interval = React.useRef(null);
  const [millis, setMillis] = useState(minutesToMil(minutes));

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        // move onEnd to useEffect outside of this component's setState
        clearInterval(interval.current);
        // onEnd();
        return time;
      }
      const timeLeft = time - 1000;
      // report progress
      return timeLeft;
    });
  };

  useEffect(() => {
    setMillis(minutesToMil(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress(millis / minutesToMil(minutes));
    if (millis === 0) {
      onEnd()
    }
  }, [millis]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);


  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(50,205,255, 0.3)',
  },
});
