import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './TicketDetail.styles';
import { Colors } from '../styles/_colors';
import { NavigationStackOptions } from 'react-navigation-stack';
import { TicketDetailBody} from '../ui';
import { useNavigation } from '../hooks';


export const TicketDetail: React.FunctionComponent & { navigationOptions?: NavigationStackOptions } = (): JSX.Element => {
  const navigation = useNavigation();
  const { ticket } = navigation.state.params;

  return (
    <View style={styles.ticketContainer}>
      <TicketDetailBody ticket={ticket}></TicketDetailBody>
    </View>
  );
}

TicketDetail.navigationOptions = () => ({
  title: "Details",
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
