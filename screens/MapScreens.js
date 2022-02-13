import { StyleSheet, Text, View } from 'react-native'

import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import React from 'react'
import RideOptionsCard from '../components/RideOptionsCard';
import { createStackNavigator } from '@react-navigation/stack';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native'

// import { KeyboardAvoidingView } from 'react-native-web';

const MapScreens = () => {
  const Stack = createStackNavigator();
  return (
    <View>
        <View style={tw`h-1/2`}>
            <Map />
        </View>
        <View style={tw`h-1/2`}>
            <Stack.Navigator>
              <Stack.Screen name="MavigateCard" component={NavigateCard} options = {{headerShown: false}}/>
              <Stack.Screen name="RideOptionCard" component={RideOptionsCard} options = {{headerShown: false}}/>
            </Stack.Navigator>
        </View>
    </View>
  )
}

export default MapScreens

const styles = StyleSheet.create({
    
})