import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

export default function HomeScreen({ navigation }) {
  const handleLogin = () => {
    if (handleLogin) {
      navigation.navigate('Second Page')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agora é algo mais sério</Text>
      <StatusBar style="light" />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}> Entrar </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 16
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#f1a35a',
    borderWidth: 1,
    marginBottom: 20,
    marginTop: 8,
    paddingHorizontal: 8,
    borderRadius: 10
  },
  button: {
    backgroundColor: '#f1a35a'
  }
})
