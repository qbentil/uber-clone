import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import { Icon } from 'react-native-elements';
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import {useNavigation} from "@react-navigation/native"
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

// Data
const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1.2,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
    },
    {
        id: "Uber-X-156",
        title: "UberXShare",
        multiplier: 0.5,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png",
    },
    {
        id: "Uber-X-146",
        title: "Connect",
        multiplier: 1.5,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png",
    }
];
const CHARGE_RATE = 1.5;
const getPrice = (value, multiplier) => {
    return new Intl.NumberFormat('en-gb', {
        style:'currency',
        currency: 'ghs'
    }).format(value * CHARGE_RATE * multiplier / 100).replace("S", "₵")
}
const RideOptionsCard =() => {
    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity
                    onPress = {() => navigation.navigate('NavigateCard')}
                    style={tw`absolute top-2 left-5 z-50 p-3 rounded-full mt--9`}
                >
                    <Icon name = "chevron-left" type='fontawesome' />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-sm mt--9`}> Choose a ride - {travelTimeInformation?.distance?.text}</Text>
            </View>
            <FlatList data = {data}
                keyExtractor = {(item) => item.id}
                ItemSeparatorComponent ={() => {
                    return <View style={[tw`bg-gray-200`, {height: 0.5}]} />
                }}
                renderItem = {({item: {id, title, image, multiplier}, item}) => (
                    <TouchableOpacity
                     style={tw`flex-row justify-between items-center px-5 ${id === selected?.id && 'bg-gray-200'}`}
                     onPress = {() => setSelected(item)}
                    >
                        {/* Image */}
                        <Image 
                            style = {{width: 90, height: 90, resizeMode: 'contain'}}
                            source={{uri: image}}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>Travel Time: {travelTimeInformation?.duration?.text}</Text>
                        </View>
                        {/* Pricing */}
                        <Text style={tw`text-xl`}>{getPrice(travelTimeInformation?.duration?.value, multiplier)}</Text>
                    </TouchableOpacity>

                )}
            />
            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity disabled = {!selected} style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-200'}`}>
                    <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
     );
}


export default RideOptionsCard

const styles = StyleSheet.create({
    
});