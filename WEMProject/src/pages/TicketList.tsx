import React from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation } from '../hooks';
import { styles } from './TicketList.styles';
import { Colors } from '../styles/_colors';
import { NavigationStackOptions } from 'react-navigation-stack';
import { TicketListItem, TicketListHeader } from '../ui';
import { TICKETS } from '../../assets/tickets.js';
import { Ticket } from '../data';

export const TicketList: React.FunctionComponent & { navigationOptions?: NavigationStackOptions } = (): JSX.Element => {
  const navigation = useNavigation();
  const { asset } = navigation.state.params;
  const tickets: Ticket[] = TICKETS;

  const renderItem = ({ item }: { item: Ticket }): JSX.Element => {
    return (
      <View style={styles.roomContainer}>
        <TicketListItem ticket={item} />
      </View>
    );
  };
  const RenderSeparator = () => <View style={styles.separator}></View>;

  return (
    <View style={styles.roomContainer}>
      <TicketListHeader assetDetails={asset}></TicketListHeader>
      <FlatList data={tickets} renderItem={renderItem} ItemSeparatorComponent={RenderSeparator} keyExtractor={ticket => ticket.id} />
    </View>
  );
}

TicketList.navigationOptions = () => ({
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
