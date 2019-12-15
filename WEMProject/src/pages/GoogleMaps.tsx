import React, { Component } from 'react';
import { NavigationStackOptions } from 'react-navigation-stack';
import { Colors } from '../styles/_colors';

import {
    View,
    Text
} from 'react-native';
import { styles } from './GoogleMaps.styles';
//import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default class GoogleMaps extends Component {
    static navigationOptions = {
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
      };

    state = {
        coordinates: [
            {name: '1', latitude: 37.8025259, longitude: -122.4351431}, 
            {name: '2', latitude: 37.8025259, longitude: -122.4351431}, 
        ]
    }
    
    render(){
        return (
           /*  <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
                latitude: 50.937030,
                longitude: 5.348530,
                latitudeDelta: 0.09,
                longitudeDelta: 0.035,
            }}>

            </MapView> */
            <View>
                <Text>Maps</Text>
            </View>
        )
    }

}
