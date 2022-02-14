import {DEVELOPER_OUTRO, GOOGLE_MAPS_APIKEY} from "@env"
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { setDestination, setOrigin } from '../slices/navSlice';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Icon } from 'react-native-elements';
import NavFavourites from '../components/NavFavourites';
import NavOptions from '../components/NavOptions';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native'

// import {GOOGLE_MAPS_APIKEY} from "@env"

const HomeScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

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
        <TouchableOpacity 
            style = {tw`bg-gray-100 absolute top-9 right-6 z-50 p-2 border border-gray-200 rounded-full shadow-lg`}
            onPress = {() => alert(DEVELOPER_OUTRO)}
            // onPress = {() => navigation.navigate("HomeScreen")}
        >
            {/* <Icon
                name='person-circle-outline'
                type='ionicon'
                size={45}
            /> 
            */}
            <Image 
                style = {styles.avatar}
                source={{
                    uri: "https://codersquiz.netlify.app/img/bentil.jpeg" //uber logo link
                }} 
            />
        </TouchableOpacity>
      </View>
      <GooglePlacesAutocomplete 
        styles={{
            container: {
                flex: 0,
            },
            textInput: {
                fontSize: 18,
            },
            textInputContainer: {
                paddingHorizontal: 10,
                marginHorizontal: 5,
            },
            predefinedPlacesDescription: {
                color: '#1faadb',
            },
        }}

        query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
            // components: 'country:gh',
        }}
        onPress = {(data, details=null) => {
            dispatch(setOrigin({
                location: details.geometry.location,
                description: data.description
            }))

            dispatch(setDestination(null))
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
      <NavFavourites />
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    avatar: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
        // borderWidth: 1,
        // borderColor: "gray",
        borderRadius: 30,
    }
})

export default HomeScreen