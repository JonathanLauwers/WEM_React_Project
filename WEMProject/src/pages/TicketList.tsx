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
import TransitionView from '../animations/TransitionView';
import Dots from 'react-native-dots-pagination';
import { ScrollView } from 'react-native-gesture-handler';

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
  }, []) 

  const renderItem = ({ item, index }: { item: Ticket }): JSX.Element => {
    return (
      <View style={styles.ticketContainer}>
        <TicketListItem ticket={item} index={index} navigateTicketDetails={navigateTicketDetails}/>
      </View>
    );
  };
  const RenderSeparator = () => <View style={styles.separator}></View>;
  const [active, setActive] = React.useState(0);
  const length = props.tickets.length;
  var items;

  
  const setPaginationVal = (items: any) => {
    setActive(items.length);
  };

  handleScroll = (event: Object) => {
    var value = Math.round((event.nativeEvent.contentSize.height - event.nativeEvent.layoutMeasurement.height) / length);
    var activeVal = Math.floor(event.nativeEvent.contentOffset.y / value);

    if(activeVal >= 0 && activeVal < length){
      setActive(activeVal);
    }  
  }

  return (
    <TransitionView style={styles.ticketContainer}>
        <TicketListHeader></TicketListHeader>
        {props.isLoading ? (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color={Colors.darkBlue} />
            </View>
          ) : ( 
          <ScrollView onScroll={this.handleScroll} scrollEventThrottle={4}>
            <FlatList 
              data={props.tickets} 
              renderItem={renderItem} 
              ItemSeparatorComponent={RenderSeparator} 
              keyExtractor={ticket => ticket.id} 
              viewabilityConfig={{
                itemVisiblePercentThreshold: 50
              }}/>
          </ScrollView> )}
          {length >= 8 ? 
          <View style={styles.dots}>
            <Dots length={length} active={active} activeColor={Colors.primary}/>
          </View> 
          : null}
          
    </TransitionView>
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
