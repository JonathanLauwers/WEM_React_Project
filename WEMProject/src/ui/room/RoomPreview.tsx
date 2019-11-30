import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CircledImage } from '../CircledImage';
import { styles } from './RoomPreview.styles';

type RoomPreview = {
  id: string,
  name: string,
  happinessScore: number,
  navigateRoom: (id: string) => void;

}

export const RoomPreview: React.FunctionComponent<RoomPreview> = (room): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => room.navigateRoom(room.id)}>
        <View
          style={styles.header}
        >
          <View style={{ width: 'auto', flexDirection: 'row', justifyContent: 'center' }}>
            <Text>{room.name}</Text>
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