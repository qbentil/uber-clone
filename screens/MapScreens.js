import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const MapScreens = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView >
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <Text>Go Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default MapScreens

const styles = StyleSheet.create({
    
})