import React from 'react';
import { View } from 'react-native';
import { styles } from './TicketListHeader.styles';
import { H1 } from '../TextHeaders';


export const TicketListHeader: React.FunctionComponent = (): JSX.Element => {
  return (
    <View style={styles.container}>
        <H1>Tickets</H1>
    </View>
  );
};