import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>você chegou cara o/</Text>
      <StatusBar style="light" />
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
