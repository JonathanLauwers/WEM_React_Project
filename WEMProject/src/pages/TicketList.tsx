import React, { useEffect } from 'react';
import { FlatList, View, TouchableWithoutFeedback, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '../hooks';
import { styles } from './TicketList.styles';
import { Colors } from '../styles/_colors';
import { NavigationStackOptions } from 'react-navigation-stack';
import { TicketListItem, TicketListHeader } from '../ui';
import { TICKETS } from '../../assets/tickets.js';
import { Ticket } from '../data';
import { getTicketList } from '../reducks/ticket';
import { connect } from 'react-redux';

type Props = {
  tickets: Ticket[];
  isLoading: boolean;
  getTicketList: () => (dispatch: any) => Promise<void>;
}

export const TicketList: React.FunctionComponent<Props> & { navigationOptions?: NavigationStackOptions } = (props): JSX.Element => {
  const navigation = useNavigation();
  const { asset } = navigation.state.params;
  const navigateTicketDetails = (ticket: Ticket) => navigation.navigate('TicketDetail', {ticket: ticket});
  
  useEffect(() => {
    props.getTicketList(asset.name);
  }) 

  const renderItem = ({ item }: { item: Ticket }): JSX.Element => {
    return (
      <View style={styles.ticketContainer}>
        <TicketListItem ticket={item} navigateTicketDetails={navigateTicketDetails}/>
      </View>
    );
  };
  const RenderSeparator = () => <View style={styles.separator}></View>;

  return (
    console.log(props.tickets),
    <View style={styles.ticketContainer}>
        <TicketListHeader></TicketListHeader>
        {props.tickets.length < 1 && props.isLoading ? (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color={Colors.darkBlue} />
            </View>
          ) : ( 
          <View >
            <FlatList data={props.tickets} renderItem={renderItem} ItemSeparatorComponent={RenderSeparator} keyExtractor={ticket => ticket.id} />
          </View> )}
    </View>
  );
}

TicketList.navigationOptions = ({navigation}) => ({
  title: navigation.state.params.asset.name,
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
    <TouchableWithoutFeedback onPress={() => navigation.navigate('CreateTicket', {asset: navigation.state.params})}> 
        <Text style={styles.addSymbol}>+</Text>
    </TouchableWithoutFeedback>
  )
});

const mapStateToProps = state => ({ tickets: state.ticket.list, isLoading: state.ticket.isLoadingList });
const mapDispatchToProps = dispatch => ({ getTicketList: (name: string) => dispatch(getTicketList(name)) });
const TicketListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketList);
export default TicketListPage;
