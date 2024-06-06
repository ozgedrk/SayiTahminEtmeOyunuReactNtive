import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function GameScreen() {
  return (
    <View style={styles.container} >
      <Text>Computers Guess</Text>
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
