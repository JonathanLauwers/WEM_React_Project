import React, { Component } from 'react';
import { NavigationStackOptions } from 'react-navigation-stack';
import { Colors } from '../styles/_colors';
import { useNavigation } from '../hooks';
import { Room } from '../data';
import { connect } from 'react-redux';
import TransitionView from '../animations/TransitionView';
import {getCoordinates} from '../utils/CoordinatesService';

import {
    View,
    Text
} from 'react-native';
import { styles } from './GoogleMaps.styles';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

type Props = {
  room: Room;
}


export const GoogleMaps: React.FunctionComponent & { navigationOptions?: NavigationStackOptions } = (props): JSX.Element => {
  const navigation = useNavigation();
  const { room } = navigation.state.params;
  let coordinates = getCoordinates(room.id);

  return <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
 
        region={{
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        latitudeDelta: coordinates.latitudeDelta,
        longitudeDelta: coordinates.longitudeDelta,
        
}}>

</MapView> 


}


export default class Maps extends Component {
    
  
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

    
    
    render(){
        return (
            
            <View>
                 <GoogleMaps></GoogleMaps>
            </View>
        )
    }

}
