import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { RoomList } from './src/pages/RoomList';
import { AssetList } from './src/pages/AssetList';
import { TicketList } from './src/pages/TicketList';
import { TicketDetail } from './src/pages/TicketDetail';
import { CreateTicket } from './src/pages/CreateTicket';
import { AllAssetsList } from './src/pages/AllAssetsList';
import GoogleMaps from './src/pages/GoogleMaps';

export default function App() {

  const Stack = createStackNavigator({
    Home: {
      screen: RoomList
    },
    Asset: {
      screen: AssetList
    },
    Maps: {
      screen: GoogleMaps
    },
    Ticket: {
      screen: TicketList
    },
    TicketDetail: {
      screen: TicketDetail
    },
    CreateTicket: {
      screen: CreateTicket
    },
    AllAssetsList: {
      screen: AllAssetsList
    },
  });

  const AppContainer = createAppContainer(Stack);

  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});