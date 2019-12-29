import React from 'react';
import { View, Text, TouchableOpacity, Button, ColorPropType } from 'react-native';
import { styles } from './RoomListItem.styles';
import { H1 } from '../TextHeaders';
import { Room } from '../../data/room/room';
import { CircledImage } from '../CircledImage';
import { voteRoom } from '../../reducks/room';
import { ListItemTransition } from '../../animations/ListItemTransition'

type RoomPreview = {
  id: string,
  name: string,
  happinessScore: number,
  index: number,
  navigateRoom: (room: Room) => void,
  navigateMaps: (room: Room) => void,
  voteRoom: (id: string, rating: number) => void,
}

export const RoomListItem: React.FunctionComponent<RoomPreview> = (room): JSX.Element => {
  const [voted, setVoted] = React.useState(false);

  return (
    <ListItemTransition style={styles.container} index={room.index}>
      <View style={styles.leftContainer}>
        <View style={styles.imageContainer}>
          <CircledImage size={36} uri="https://firebasestorage.googleapis.com/v0/b/fiesjev2.appspot.com/o/uploads%2F1560264396955.jpg?alt=media&token=256936ae-c394-411e-945f-a61f5301bd2d" />
        </View>

        <TouchableOpacity onPress={() => room.navigateRoom(room)}>
          <View
            style={styles.header}
          >
            <H1>{room.name}</H1>
            <Text>Happiness score: {room.happinessScore}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Maps" onPress={() => room.navigateMaps(room)} />
        </View>
        <View style={styles.button}>
          <Button color="green" title="+1" disabled={voted} onPress={() => {room.voteRoom(room.id, 1), setVoted(true)}} /> 
        </View>
        <View style={styles.button}>
          <Button color="red" title="-1" disabled={voted} onPress={() => {room.voteRoom(room.id, -1), setVoted(true)}} />
        </View>
      </View>
    </ListItemTransition>
  );
};