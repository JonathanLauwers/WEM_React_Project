import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './AssetListHeader.styles';
import { H1, Subtitle } from '../TextHeaders';
import { Room } from '../../data/room/room';

type AssetListHeader = {
  roomDetails: Room;
  //navigateRoom: (room: Room) => void;
}

export const AssetListHeader: React.FunctionComponent<AssetListHeader> = (room): JSX.Element => {
  return (
    <View style={styles.container}>
        <H1>{room.roomDetails.name}</H1>
        <Subtitle>Happiness score: {room.roomDetails.happinessScore}</Subtitle>
    </View>
  );
};