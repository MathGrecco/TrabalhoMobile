import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import axios from 'axios'

const HomeScreen = ({ navigation }) => {
  const [jokes, setJokes] = useState([])

  const fetchJokes = async () => {
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
      console.error('Erro ao buscar as piadas:', error)
    }
  }

  useEffect(() => {
    fetchJokes()
  }, [])

  const handleLogin = () => {
    navigation.navigate('Second Page')
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text style={styles.title}>Piadocas do Chuck Norris</Text>
      </View>

      {jokes.map((joke, index) => (
        <View key={index} style={styles.jokeContainer}>
          <Text style={styles.jokeText}>{joke}</Text>
        </View>
      ))}

      <TouchableOpacity
        style={styles.button}
        title="Recarregar Piadas"
        onPress={fetchJokes}
      >
        <Text style={styles.buttonText}>Recarregar novas piadocas</Text>
      </TouchableOpacity>

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
    marginBottom: 16,
    color: '#f1a35a'
  },
  input: {
    width: '80%',
    height: 50,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#f1a35a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    width: '70%',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 15
  },
  jokeContainer: {
    width: '80%',
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10
  },
  jokeText: {
    fontSize: 16,
    color: '#333'
  }
})

export default HomeScreen
