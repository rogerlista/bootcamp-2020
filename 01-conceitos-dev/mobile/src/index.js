import React, { useState, useEffect } from 'react'
import { View, FlatList, Text, TouchableOpacity, StatusBar, SafeAreaView, StyleSheet } from 'react-native'

import api from './services/api'

export default function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('/projects').then((response) => {
      setProjects(response.data)
    })
  }, [])

  async function handleAddProject() {
    const response = await api.post('/projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Juca Bala',
    })

    setProjects([...projects, response.data])
  }

  return (
    <>
      <StatusBar barStyle="light-content" background="#7159c1" />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) => <Text style={styles.title}>{project.title}</Text>}
        />

        <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleAddProject}>
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 30,
  },

  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 30,
  },
})
