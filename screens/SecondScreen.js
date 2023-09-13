import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native'
import axios from 'axios'

const SecondScreen = () => {
  const [digimons, setDigimons] = useState([])
  const [selectedDigimon, setSelectedDigimon] = useState(null)

  useEffect(() => {
    async function fetchDigimons() {
      try {
        const response = await axios.get(
          'https://digimon-api.vercel.app/api/digimon'
        )
        const digimonData = response.data
        setDigimons(digimonData)
      } catch (error) {
        console.error('Erro ao buscar Digimons:', error)
      }
    }

    fetchDigimons()
  }, [])

  const handleDigimonPress = digimon => {
    setSelectedDigimon(digimon)
  }

  const renderDigimonItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleDigimonPress(item)}>
      <View style={styles.digimonContainer}>
        <Image source={{ uri: item.img }} style={styles.digimonImage} />
        <Text style={styles.digimonName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Digimons</Text>
      <FlatList
        data={digimons}
        keyExtractor={item => item.name}
        renderItem={renderDigimonItem}
      />
      {selectedDigimon && (
        <View style={styles.selectedDigimonContainer}>
          <Image
            source={{ uri: selectedDigimon.img }}
            style={styles.selectedDigimonImage}
          />
          <Text style={styles.selectedDigimonName}>{selectedDigimon.name}</Text>
          <Text style={styles.selectedDigimonInfo}>
            Nível: {selectedDigimon.level}
          </Text>
        </View>
      )}
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
  digimonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  digimonImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 10
  },
  digimonName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  selectedDigimonContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  selectedDigimonImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  selectedDigimonName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  },
  selectedDigimonInfo: {
    fontSize: 18,
    marginTop: 5
  }
})

export default SecondScreen
