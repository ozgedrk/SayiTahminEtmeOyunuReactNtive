import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground } from 'react-native';
import GameStartScreen from './screens/GameStartScreen';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  function sendedNumberHandler(sendedNumber) {
    setUserNumber(sendedNumber);
   // console.log(sendedNumber);
  }
  let screen = <GameStartScreen onSendNumber={sendedNumberHandler} />;

  if (userNumber) {
   screen = <GameScreen userNumber={userNumber}/>;
  }

  return (
    <LinearGradient
    colors={['rgba(0,0,0,0.8)', 'transparent']}
    style={styles.container}
    >
      <ImageBackground 
      style={styles.container}
      source={require('./assets/back.jpg')}
      imageStyle={styles.backImage}
      >
      {screen}   
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  backImage:{
    opacity: 0.2,
  },
});
