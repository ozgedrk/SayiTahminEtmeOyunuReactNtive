import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground } from 'react-native';
import GameStartScreen from './screens/GameStartScreen';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <LinearGradient
    colors={['rgba(0,0,0,0.8)', 'transparent']}
    style={styles.container}
    >
      <ImageBackground 
      style={styles.container}
      source={require('./assets/back.jpg')}
      imageStyle={styles.backImage}>
         <GameStartScreen />
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backImage:{
    opacity: 0.2,
  },
});
