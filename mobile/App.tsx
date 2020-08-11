import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const date = new Date().toString();

  return (
    <View style={styles.container}>
      <Text>Proffy 👹</Text>
      <Text style={styles.title}>This is My First APP</Text>
      <Text>{date}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#f00',
    fontSize: 32
  }
});
