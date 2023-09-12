import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import axios from 'axios'

const HomeScreen = ({ navigation }) => {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    async function fetchJokes() {
      try {
        const response1 = await axios.get(
          'https://api.chucknorris.io/jokes/random'
        )
        const response2 = await axios.get(
          'https://api.chucknorris.io/jokes/random'
        )

        const joke1 = response1.data.value
        const joke2 = response2.data.value

        setJokes([joke1, joke2])
      } catch (error) {
        console.error('Erro ao buscar piadas:', error)
      }
    }

    fetchJokes()
  }, [])

  const handleLogin = () => {
    if (handleLogin) {
      navigation.navigate('Second Page')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Piadas do Chuck Norris</Text>
      <View style={styles.input}>
        {jokes.map((joke, index) => (
          <Text key={index} style={styles.jokeText}>
            {joke}
          </Text>
        ))}
      </View>
      <Button title="Recarregar Piadas" onPress={() => fetchJokes()} />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}> Ir para a segunda tela </Text>
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

export default HomeScreen
