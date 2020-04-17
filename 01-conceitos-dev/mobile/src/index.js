import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" background="#7159c1" />

      <View style={styles.container}>
        <Text style={styles.title}>Hello Gostack</Text>
      </View>
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
    fontSize: 40,
    fontWeight: 'bold',
  },
})
