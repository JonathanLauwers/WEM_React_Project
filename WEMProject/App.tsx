import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import  RoomListPage  from './src/pages/RoomList';
import  AssetListPage from './src/pages/AssetList';
import  TicketListPage from './src/pages/TicketList';
import { TicketDetail } from './src/pages/TicketDetail';
import CameraPage from './src/pages/Camera';

import CreateTicketPage from './src/pages/CreateTicket';
import AllAssetsListPage from './src/pages/AllAssetsList';
import GoogleMaps from './src/pages/GoogleMaps';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './src/reducks';
import thunk from 'redux-thunk';
import { NavigationConfig } from './src/animations/NavigationConfig';
import { BottomNavConfig } from './src/animations/BottomNavConfig';

export default function App() {

  const RoomsStack = createStackNavigator({
    Home: {
      screen: RoomListPage
    },
    Asset: {
      screen: AssetListPage
    },
    Ticket: {
      screen: TicketListPage
    },
    Maps: {
      screen: GoogleMaps
    },
    Camera: {
      screen: CameraPage
    },
    TicketDetail: {
      screen: TicketDetail
    },
    CreateTicket: {
      screen: CreateTicketPage
    },
    AllAssetsList: {
      screen: AllAssetsListPage
    },
  }, { transitionConfig: NavigationConfig });

  const AssetsStack = createStackNavigator({
    AllAssetsList: {
      screen: AllAssetsListPage
    },
    Ticket: {
      screen: TicketListPage
    },
    Camera: {
      screen: CameraPage
    },
    TicketDetail: {
      screen: TicketDetail
    },
    CreateTicket: {
      screen: CreateTicketPage
    },
  }, { transitionConfig: NavigationConfig });

  const MainTabs = createBottomTabNavigator({
    Rooms: RoomsStack, 
    Assets: AssetsStack, 
  }, 
  {
    tabBarOptions: {
      activeTintColor: '#57a6eb',
      inactiveTintColor: '#BBB',
      labelStyle: {
        fontSize: 16,
      },
    },
  },
  { transitionConfig: BottomNavConfig},
  );

  const store = createStore(reducer, applyMiddleware(thunk));

  const AppContainer = createAppContainer(MainTabs);

  return (
    <Provider store={store} style={styles.container}>
      <AppContainer />
    </Provider>
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