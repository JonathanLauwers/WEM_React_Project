import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './TicketListItem.styles';
import { Subtitle } from '../TextHeaders';
import { Ticket } from '../../data';

type TicketPreview = {
  ticket: Ticket;
}

export const TicketListItem: React.FunctionComponent<TicketPreview> = (ticket): JSX.Element => {
  return (
    <View style={styles.container}>
      <Subtitle>Number of votes: {ticket.ticket.numberOfVotes}</Subtitle>
      <Text>{ticket.ticket.description}</Text>
    </View>
  );
};