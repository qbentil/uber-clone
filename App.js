import { StyleSheet, Text, View } from 'react-native';

// SET UP REDUX
import { Provider } from 'react-redux';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <Text>Uber 2.0!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
