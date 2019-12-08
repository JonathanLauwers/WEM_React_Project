import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { RoomList } from './src/pages/RoomList';
import { AssetList } from './src/pages/AssetList';
import { TicketList } from './src/pages/TicketList';
import { TicketDetail } from './src/pages/TicketDetail';

export default function App() {

  const Stack = createStackNavigator({
    Home: {
      screen: RoomList
    },
    Asset: {
      screen: AssetList
    },
    Ticket: {
      screen: TicketList
    },
    TicketDetail: {
      screen: TicketDetail
    },
    AssetList: {
      screen: AssetList
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