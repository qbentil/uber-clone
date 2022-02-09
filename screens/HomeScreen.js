import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const HomeScreen = () => {
  return (
    <View style = {container}>
      <Text>Welcome HomeScreen!</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})