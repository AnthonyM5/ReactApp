import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import {RoundedButton} from '../../components/RoundedButton'


export const Focus = () => {
  const [text, setText] = useState('');
  console.log(text)
  return (
    <View style={styles.container}>
    <Text>Emojifier!</Text>
    <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <RoundedButton />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join('')}
        Word Count: {text.split(' ').length > 1 ? text.split(' ').length - 1 : 0}
      </Text>
    </View>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  }
  
});
