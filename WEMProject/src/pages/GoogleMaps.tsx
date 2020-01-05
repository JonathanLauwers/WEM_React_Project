import React, { Component, useEffect } from 'react';
import { NavigationStackOptions } from 'react-navigation-stack';
import { Colors } from '../styles/_colors';
import { useNavigation } from '../hooks';
import { Room } from '../data';
import { getCoordinates } from '../utils/CoordinatesService';
import { TouchableWithoutFeedback } from 'react-native';
//import GetLocation from 'react-native-get-location'
import MapViewDirections from 'react-native-maps-directions';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { styles } from './GoogleMaps.styles';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
//import { getPhoneLocation } from '../utils/GetLocationService';
 
type Props = {
  room: Room;
}
 
 
export const GoogleMaps: React.FunctionComponent & { navigationOptions?: NavigationStackOptions } = (props): JSX.Element => {
  const navigation = useNavigation();
  const { room } = navigation.state.params;
  let coordinatesRoom = getCoordinates(room.id);
  console.log("ROOM CORDS", coordinatesRoom);
  
  const [currentLongitude, setCurrentLongitude] = React.useState(5.348761);
  const [currentLatitude, setCurrentLatitude] = React.useState(50.922123);
 
  const getPhoneLocation = async() => {
    try {
      navigator.geolocation.getCurrentPosition(
      (position) => {
          setCurrentLatitude(position.coords.latitude);
          setCurrentLongitude(position.coords.longitude);
        },
        error => console.error(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    } catch (error) {
        return error;
    }
  }
 
    useEffect(() => {
      getPhoneLocation();
    },[])

  let destination = {latitude: coordinatesRoom.latitude, longitude: coordinatesRoom.longitude};
  let origin = {latitude: currentLatitude, longitude: coordinatesRoom.longitude};

  console.log("DESTINATION", destination);
  console.log("ORIGIN", origin);
  return (
    <MapView
        style={styles.map}
        initialRegion={{
          latitude: currentLatitude,
          longitude: currentLongitude,
          latitudeDelta: 0.22,
          longitudeDelta: 0.0421,
        }} >    
        <MapViewDirections
        origin={{latitude: currentLatitude, longitude: currentLongitude}}
        destination={{latitude: coordinatesRoom.latitude, longitude: coordinatesRoom.longitude}}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor={Colors.primary}
        />  
    </MapView>
  )
}

GoogleMaps.navigationOptions = () => ({
   title: 'Maps',
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerTitleStyle: {
      color: '#FFF'
    },
    headerBackTitleStyle: {
      color: '#FFF'
    },
    headerRight: (
      <TouchableWithoutFeedback onPress={() => console.warn("Find route to room")}>
          <Text style={styles.findRouteButton}>Loc:</Text>
      </TouchableWithoutFeedback>
    )
  });
 
export default GoogleMaps;