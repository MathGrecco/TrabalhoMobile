import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (email && password) {
      alert('deu certo')
    } else {
      alert('Sorry buddy')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seja Bem Vindo(a)</Text>
      <StatusBar style="light" />

      <Text>Login: </Text>
      <TextInput
        style={styles.input}
        placeholder="Informe seu Email"
        value={email}
        onChangeText={setEmail}
      />

      <Text>Password:: </Text>
      <TextInput
        style={styles.input}
        placeholder="Insira a sua senha "
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Entrar" onPress={handleLogin} />
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
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    marginTop: 8,
    paddingHorizontal: 8
  }
})
