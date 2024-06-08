import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground } from 'react-native';
import GameStartScreen from './screens/GameStartScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen'
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessCounts, setGuessCounts] = useState(0)
  function sendedNumberHandler(sendedNumber) {
    setUserNumber(sendedNumber);
    setGameIsOver(false);
   // console.log(sendedNumber);
  }
  function gameOverHandler(numberOfGuess){
    setGameIsOver(true);
    setGuessCounts(numberOfGuess)
  }
  let screen = <GameStartScreen onSendNumber={sendedNumberHandler} />;

  if (userNumber) {
   screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }
  if(gameIsOver && userNumber)
  {
    screen = <GameOverScreen roundsNumber={guessCounts} userNumber={userNumber} />;
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
