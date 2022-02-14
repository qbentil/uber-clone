import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { setDestination, setOrigin } from '../slices/navSlice';

import {GOOGLE_MAPS_APIKEY} from "@env"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Icon } from 'react-native-elements';
import NavFavourites from './NavFavourites';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { useDispatch } from 'react-redux';
import {useNavigation} from "@react-navigation/native"

const NavigateCard =() => {
    
    const navigation = useNavigation()
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <View style={tw`flex-row justify-around text-center`}>
                {/* <TouchableOpacity
                        onPress = {() => navigation.navigate('NavigateCard')}
                        style={tw`py-2 rounded-full  mt--9`}
                    >
                        <Icon name = "chevron-left" type='fontawesome' />
                    </TouchableOpacity> */}
                <Text style={tw`text-center py-2 text-sm mt--9`}> Where are you going today?</Text>
            </View>
            <View style={tw`border-t border-gray-200 flex-shrink`}>

                <GooglePlacesAutocomplete 
                    styles={inputBoxStyle}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                        components: 'country:gh',
                    }}
                    onPress = {(data, details=null) => {
                        dispatch(setDestination({
                            location: details.geometry.location,
                            description: data.description
                        }))

                        // Navigate user to RideOption pagge
                        navigation.navigate("RideOptionCard")
                    }}
                    minLength={2}
                    returnKeyType= {"search"}
                    fetchDetails = {true}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                    placeholder="Where to ?"
                    enablePoweredByContainer = {false}

                />
            </View>
            {/* <NavFavourites /> */}
            <View  style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`} >
                <TouchableOpacity style={tw`flex flex-row bg-black w-24 px-4 justify-between py-3 rounded-full`}
                    onPress={() => navigation.navigate('RideOptionCard')}
                >
                    <Icon 
                        type = 'font-awesome'
                        name = 'car'
                        color={'white'}
                        size={16}
                    />
                    <Text style={tw`text-white text-center`}>Car</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex flex-row bg-white border w-24 px-4 justify-between py-3 rounded-full`}>
                    <Icon 
                        type = 'ionicon'
                        name = 'fast-food-outline'
                        color={'black'}
                        size={16}
                    />
                    <Text style={tw`text-black text-center`}>Eat</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}


const inputBoxStyle = StyleSheet.create({
    container: {
        borderColor: "#fff",
        paddingTop: 20,
        flex: 0,
        
    },
    textInputContainer: {
        paddingHorizontal: 10,
        paddingBottom: 0
    },
    textInput: {
        height: 38,
        borderRadius: 0,
        fontSize: 18,
        height: 45,
        borderWidth: 1
        
    }
});

export default NavigateCard