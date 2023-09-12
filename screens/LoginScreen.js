import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('Home')
    } else {
      alert('Não foi dessa vez fera :/')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seja Bem Vindo(a)</Text>
      <StatusBar style="dark" />

      <Text>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe seu Email"
        value={email}
        onChangeText={setEmail}
      />

      <Text>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira a sua senha "
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

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
    backgroundColor: '#f1a35a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 15
  }
})

export default LoginScreen
