import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Icon } from 'react-native-elements';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native'

const data = [
    {
        id: "12",
        title: "Ride",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        screen: "MapScreen"
    },
    {
        id: "123",
        title: "Package",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        screen: "PackageScreen"
    }
];

const NavOptions = () => {
    const navigation = useNavigation();
  return (
    <ScrollView>
        <View style = {[tw`m-2 p-2 bg-green-500 w-100 h-35 rounded-xl`, styles.showCase]}>
            <View >
                <Text style={[tw`p-2 pb-0 font-semibold text-xl`, {fontSize: 18}]}>UberX Share is here!</Text>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("")}
                    style={[tw`p-2 pt-0 mt-1`,{display:'flex', flexDirection: 'row'}]}
                >
                    <Text style={[tw`text-lg`, {fontSize: 13}]}>Try UberXShare </Text>
                    <Icon 
                        style={[tw`mt-1 w-10`]}
                        type='antdesign'
                        name='arrowright'
                        color='black'
                    />
                </TouchableOpacity>
            </View>
            <View>
                <Image 
                    style = {[tw`pl-5`, {width: 120, height: 120, resizeMode: 'contain'}]}
                    source={{uri: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png"}}
                />
            </View>
        </View>
        <FlatList 
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <TouchableOpacity 
                    style = {[tw`p-2 pl-6 pb-9 pt-0 bg-gray-200 m-2 w-48 h-30 rounded-md`, ]}
                    onPress={() => navigation.navigate(item.screen)}
                >
                    <View>
                        <Image 
                            style = {[tw`ml-20`, styles.navImage]}
                            source={{uri: item.image}}
                        />
                        <Text style = {[tw`mt-2 text-lg font-semibold`, {fontSize: 15}]}>{item.title}</Text>
                        {/* <Icon 
                            style={tw`p-2 bg-black rounded-full w-10 mt-3`}
                            type='antdesign'
                            name='arrowright'
                            color='white'
                        /> */}
                    </View>
                </TouchableOpacity>
            )}
        />
    </ScrollView>
  )
}

export default NavOptions

const styles = StyleSheet.create({
    navImage: {
        width: 80, 
        height: 80, 
        resizeMode: 'contain'
    },
    showCase: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})