import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import tw from 'twrnc'

const data = [
    {
        id: "12",
        title: "Get a ride",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        screen: "MapScreen"
    },
    {
        id: "123",
        title: "Order food",
        image: "../assets/ueat.png",
        screen: "EatsScreen"
    }
];

const NavOptions = () => {
  return (
    <FlatList 
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <TouchableOpacity style = {tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 h-50`}>
                <View>
                    <Image 
                        style = {{width: 120, height: 120, resizeMode: 'contain'}}
                        source={{uri: item.image}}
                    />
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})