import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './TicketListItem.styles';
import { Subtitle } from '../TextHeaders';
import { Ticket } from '../../data';
import ListItemTransition from '../../animations/ListItemTransition';

type TicketPreview = {
  ticket: Ticket;
  index: Number;
  navigateTicketDetails: (ticket: Ticket) => void;
}

export const TicketListItem: React.FunctionComponent<TicketPreview> = (ticket): JSX.Element => {
  return (
    <ListItemTransition index={ticket.index}>
      <TouchableOpacity onPress={() => ticket.navigateTicketDetails(ticket.ticket)}>
        <View style={styles.container}>
          <Subtitle>Ticket ID: {ticket.ticket.id}</Subtitle>
          <Text>Number of votes: {ticket.ticket.numberOfVotes}</Text>
        </View>
      </TouchableOpacity>
    </ListItemTransition>
  );
};