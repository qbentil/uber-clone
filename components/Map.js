import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import {selectOrigin} from "../slices/navSlice"
import tw from 'twrnc';
import {useSelector} from "react-redux"

const Map = () => {
  const origin = useSelector(selectOrigin);
  return (
    <MapView
      style={tw`flex-1`}
      mapType ="standard"
      initialRegion={{
        latitude: 5.646390,
        longitude: -0.181980,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  )
}

export default Map

const styles = StyleSheet.create({})