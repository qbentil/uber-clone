import { Image, Input, StyleSheet, Text, View } from 'react-native'
import { setDestination, setOrigin } from '../slices/navSlice';

import {GOOGLE_MAPS_APIKEY} from "@env"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import NavOptions from '../components/NavOptions';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import { useDispatch } from 'react-redux';

const HomeScreen = () => {
    const dispatch = useDispatch()
  return (
    <SafeAreaView style = {tw`bg-white h-full`}>
      <View style={tw`p-5`}>
          {/* Adding Logo */}
          <Image 
            style = {styles.logo}
            source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" //uber logo link
            }}
          />
      </View>
      <GooglePlacesAutocomplete 
        style={{
            textInputContainer: {
                flex: 0,
            },
            textInput: {
                fontSize: 18,
            },
            predefinedPlacesDescription: {
                color: '#1faadb',
            },
        }}
        query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
            components: 'country:gh',
        }}
        onPress = {(data, details=null) => {
            dispatch(setOrigin({
                location: details.geometry.location,
                description: data.description
            }))

            dispatch(setDestination(null))
            // console.log(details)
        }}
        minLength={2}
        returnKeyType= {"search"}
        fetchDetails = {true}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
        placeholder="Curent location?"
        enablePoweredByContainer = {false}

      />
      <NavOptions />
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    }
})

export default HomeScreen