import { StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import { useState } from 'react';
import Title from '../components/Title';

export default function GameStartScreen({ onPress, onSendNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');
  function resetHandler() {
    setEnteredNumber('');
  }

  function confirmHandler() {
    const chosenNumver = parseInt(enteredNumber)
    if (isNaN(chosenNumver) || chosenNumver <= 0 || chosenNumver > 99) {
      Alert.alert('Invalid Number','Number should be between 1 and 99',[{text: 'Okay',style: 'destructive', 
      onPress : resetHandler} ,
      ]);
      return;
    }
    onSendNumber(chosenNumver);
  }

  function numberHandler(ozge){
    //console.log(ozge);
    setEnteredNumber(ozge);
  }
  
  return (
    <View style={styles.container}>
      <Title>Guessing Number Game</Title>
      <View style={styles.card}> 
        <TextInput 
          style={styles.input} 
          keyboardType='number-pad'
          maxLength={2}
          onChangeText={numberHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={resetHandler}>Clear</CustomButton>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={confirmHandler}>Approve</CustomButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card:{
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  input:{
    borderBottomWidth: 2,
    borderBottomColor: 'yellow',
    width: 50,
    height: 50,
    marginVertical: 10,
    fontSize: 35,
    fontWeight: 'bold',
  },
  buttonsContainer:{
    flexDirection: 'row',
  },
  buttonContainer:{
    flex: 1,
  },
  
});
