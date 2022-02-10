import { Image, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';

const HomeScreen = () => {
  return (
    <SafeAreaView style = {tw`bg-white h-full`}>
      <View style={tw`p-5`}>
          {/* Adding Logo */}
          <Image 
            style = {styles.logo}
            source={{
                uri: "https://links.papareact.com/gzs" //uber logo link
            }}
          />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    }
})