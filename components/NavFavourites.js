import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Icon } from 'react-native-elements';
import React from 'react';
import tw from 'twrnc';

// import { FlatList } from 'react-native-gesture-handler';


const data = [
    {
        id: "1",
        icon: "home",
        location: "Home",
        destination: "Big Yellow House, Anyaa Awosshie Road"
    },
    {
        id: "2",
        icon: "school",
        location: "School",
        destination: "Legon Campus, Accra, Ghana"
    },
    // {
    //     id: "3",
    //     icon: "briefcase",
    //     location: "Work",
    //     destination: "STL Ghana, Airpot west"
    // },
]
const NavFavourites =() => {
    return(
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent ={() => {
                    return <View style={[tw`bg-gray-200`, {height: 0.5}]} />
                }}
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={tw`flex-row items-center p-5`}
                    >
                        <Icon
                            style={tw`mr-4 rounded-full bg-gray-300 p-4`}
                            name={item.icon}
                            type='ionicon'
                            color='white'
                            size={18}
                        />
                        <View>
                            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
                            <Text style={tw`text-gray-500`}>{item.destination}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
    )

}


// const styles = StyleSheet.create({
    
// });

export default NavFavourites