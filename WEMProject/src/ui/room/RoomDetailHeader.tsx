import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './RoomDetailHeader.styles';
import { H1, Subtitle } from '../TextHeaders';
import { Room } from '../../data/room/room';

type RoomDetailHeader = {
  roomDetails: Room;
  //navigateRoom: (room: Room) => void;
}

export const RoomDetailHeader: React.FunctionComponent<RoomDetailHeader> = (room): JSX.Element => {
  return (
    <View style={styles.container}>
        <H1>{room.roomDetails.name}</H1>
        <Subtitle>Happiness score: {room.roomDetails.happinessScore}</Subtitle>
    </View>
  );
};