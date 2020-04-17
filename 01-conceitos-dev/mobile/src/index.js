import React, { useState, useEffect } from 'react'
import { View, FlatList, Text, StatusBar, SafeAreaView, StyleSheet } from 'react-native'

import api from './services/api'

export default function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('/projects').then((response) => {
      setProjects(response.data)
    })
  }, [])

  return (
    <>
      <StatusBar barStyle="light-content" background="#7159c1" />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) => <Text style={styles.title}>{project.title}</Text>}
        />
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
})
