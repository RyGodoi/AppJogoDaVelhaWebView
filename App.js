import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';

export default function App() {


  const [internet, setInternet] = useState(false)
  const image = require('./assets/backgrouds.jpg');
  ;

  useEffect(() => {
    NetInfo.fetch().then((state) => {
      setInternet(state.isConnected)
    });
  }, []);


  const resetar = () => {
    if (internet) {
      console.log('tem internet')
      setInternet(true)
    } else {
      alert('Você continua sem internet')
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {internet ? (
        <WebView
          style={{ flex: 1 }}
          source={{ uri: 'https://jogodavelharyan.netlify.app' }}
        />
      ) : (
        <ImageBackground style={styles.image} source={image}>
          <View style={styles.mensagem}>
            <Text style={styles.mensagemTexto}> Não tem internet!! </Text>
            <TouchableOpacity onPress={() => resetar()} style={{ padding: 8, backgroundColor: 'green', borderRadius: 20 }}><Text style={styles.mensagemTexto2}>Reinciar App</Text></TouchableOpacity>
          </View>
        </ImageBackground>
      )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  mensagem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  mensagemTexto: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  mensagemTexto2: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
});
