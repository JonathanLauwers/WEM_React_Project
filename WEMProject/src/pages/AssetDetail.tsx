import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '../hooks';
import { styles } from './RoomDetail.styles';
import { Colors } from '../styles/_colors';
import { NavigationStackOptions } from 'react-navigation-stack';
import { RoomDetailHeader } from '../ui';
import { TICKETS } from '../../assets/tickets.js';
import { Ticket } from '../data';

export const AssetDetail: React.FunctionComponent & { navigationOptions?: NavigationStackOptions } = (): JSX.Element => {
  const navigation = useNavigation();
  const { asset } = navigation.state.params;
  const ticket = (TICKETS as Ticket[]).find(ticket => ticket.assetId === asset.id);
 // const navigateRoom = (asset: Asset) => navigation.navigate('Asset', { asset: asset });

    return (
      <View style={styles.roomContainer}>
        <Text></Text>
      </View>
    );
  
}

AssetDetail.navigationOptions = () => ({
  title: "Tickets",
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTitleStyle: {
    color: '#FFF'
  },
  headerBackTitleStyle: {
    color: '#FFF'
  }
});