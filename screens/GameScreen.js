import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Title from '../components/Title';

export default function GameScreen() {
  return (
    <View style={styles.container} >
      <Title>Computers Guess</Title>
      <View>
        <Text>Is the number above or below?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex : 1,
    padding : 30,
  },
});
