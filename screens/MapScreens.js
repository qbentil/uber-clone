import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements';
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
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity 
        style = {tw`bg-gray-100 absolute top-16 left-6 z-50 p-3 rounded-full shadow-lg`}
        onPress = {() => navigation.navigate("HomeScreen")}
      >
          <Icon
              name='menu'
          />
      </TouchableOpacity>
        <View style={tw`h-1/2`}>
            <Map />
        </View>
        <View style={tw`h-1/2`}>
            <Stack.Navigator>
              <Stack.Screen name="NavigateCard" component={NavigateCard} options = {{headerShown: false}}/>
              <Stack.Screen name="RideOptionCard" component={RideOptionsCard} options = {{headerShown: false}}/>
            </Stack.Navigator>
        </View>
    </View>
  )
}

export default MapScreens

const styles = StyleSheet.create({
    
})