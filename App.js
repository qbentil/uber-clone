import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import MapScreens from './screens/MapScreens';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import store from './store';

// SET Stack navigator


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options = {{headerShown: false}}/>
                <Stack.Screen name="MapScreen" component={MapScreens} options = {{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
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
