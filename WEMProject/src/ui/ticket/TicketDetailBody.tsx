import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './TicketDetailBody.styles';
import { Subtitle, H1, H2 } from '../TextHeaders';
import { Ticket } from '../../data';

type TicketDetailBody = {
    ticket: Ticket;
}

export const TicketDetailBody: React.FunctionComponent<TicketDetailBody> = (ticket): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <H1>Ticket ID: {ticket.ticket.id}</H1>
                <Subtitle >Number of votes: {ticket.ticket.numberOfVotes}</Subtitle>
            </View>
            <View style={styles.description}>
                <H2>Description</H2>
                <Text style={styles.descriptionText}>{ticket.ticket.description}</Text>
            </View>
        </View>
    );
};