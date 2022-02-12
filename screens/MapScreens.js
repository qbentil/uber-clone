import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Map from '../components/Map';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native'

const MapScreens = () => {
    const navigation = useNavigation();
  return (
    <View>
        {/* <Text>This is thr map view</Text> */}
        <View style={tw`h-1/2`}>
            <Map />
        </View>
        <View style={tw`h-1/2`}>
            
        </View>
    </View>
  )
}

export default MapScreens

const styles = StyleSheet.create({
    
})