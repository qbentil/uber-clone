import MapView, {Marker} from 'react-native-maps';
import React ,{useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {selectDestination, selectOrigin, setTravelTimeInformation} from "../slices/navSlice"

import {GOOGLE_MAPS_APIKEY} from "@env"
import MapViewDirections from 'react-native-maps-directions';
import tw from 'twrnc';
import { useRef } from 'react';
import {useSelector, useDispatch} from "react-redux"

// import { useEffect } from 'react';



const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const dispatch = useDispatch()
  const mapRef = useRef(null)

  useEffect(() => {
    if(!origin || !destination) return;

    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: {top: 50, right: 50, bottom: 50, left: 50}
    })
  }, [origin, destination])

  // Calculate travel time
  useEffect(() => {
    if(!origin || !destination) return;
    const getTravelTime = async() => {
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination.description}&origins=${origin.description}&units=imperial&key=${GOOGLE_MAPS_APIKEY}`)
      .then((res) => res.json())
      .then(data => {
        dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
      })
    };
    getTravelTime() // call function
  }, [origin, destination, GOOGLE_MAPS_APIKEY])
  
  return (
    <MapView
      ref = {mapRef}
      style={tw`flex-1`}
      mapType ="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
        origin={origin.description}
        destination={destination.description}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeColor= "black"
        strokeWidth={3}
        />
      )}
      {origin?.location && (
        <Marker 
        coordinate={{ 
          latitude: origin.location.lat,
          longitude: origin.location.lng,
        }}
        title= "Origin"
        description={origin.description}
        identifier = "origin"

        />
      )}
      {destination?.location && (
        <Marker 
        coordinate={{ 
          latitude: destination.location.lat,
          longitude: destination.location.lng,
        }}
        title= "destination"
        description={destination.description}
        identifier = "destination"

        />
      )}
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})