import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './RoomListItem.styles';
import { H1 } from '../TextHeaders';
import { Room } from '../../data/room/room';

type RoomPreview = {
  id: string,
  name: string,
  happinessScore: number,
  navigateRoom: (room: Room) => void;

}

export const RoomListItem: React.FunctionComponent<RoomPreview> = (room): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => room.navigateRoom(room)}>
        <View
          style={styles.header}
        >
          <View style={{ width: 'auto', flexDirection: 'row', justifyContent: 'center' }}>
            <H1>{room.name}</H1>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
            <Text>Happiness score: {room.happinessScore}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};