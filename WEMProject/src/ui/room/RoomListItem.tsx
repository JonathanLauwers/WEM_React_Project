import React from 'react';
import { View, Text, TouchableOpacity, Button, ColorPropType } from 'react-native';
import { styles } from './RoomListItem.styles';
import { H1 } from '../TextHeaders';
import { Room } from '../../data/room/room';

type RoomPreview = {
  id: string,
  name: string,
  happinessScore: number,
  buttonClicked: boolean,
  navigateRoom: (room: Room) => void;

}

export const RoomListItem: React.FunctionComponent<RoomPreview> = (room): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => room.navigateRoom(room)}>
        <View
          style={styles.header}
        >
          <H1>{room.name}</H1>
          <Text>Happiness score: {room.happinessScore}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button color="green" title= "+1" onPress={() => console.log("+1")} />
        </View>
        <View style={styles.button}>
          <Button color="red" title="-1" onPress={() => console.log("-1")} />
        </View>
      </View>
    </View>
  );
};