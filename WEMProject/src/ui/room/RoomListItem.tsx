import React from 'react';
import { View, Text, TouchableOpacity, ColorPropType } from 'react-native';
import { styles } from './RoomListItem.styles';
import { H1 } from '../TextHeaders';
import { Room } from '../../data/room/room';
import { CircledImage } from '../CircledImage';
import { voteRoom } from '../../reducks/room';
import { ListItemTransition } from '../../animations/ListItemTransition'
import { Button, Icon } from 'react-native-elements';
import { Colors } from '../../styles/_colors';

type RoomPreview = {
  id: string,
  name: string,
  happinessScore: number,
  index: number,
  URI: string,
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
          <CircledImage size={36} uri={room.URI?.path ? room.URI.path : ""}/>
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
            <Button type="clear" title="" icon={
              <Icon
                name="navigation"
                size={25}
                color={Colors.primary}
            /> }
              onPress={() => room.navigateMaps(room)} /> 
          </View>
        <View style={styles.button}>
            <Button type="clear" title="" icon={
              <Icon
                name="thumb-up"
                size={25}
                color={Colors.green}
            /> }
              onPress={() => {room.voteRoom(room.id, 1), setVoted(true)}} /> 
          </View>
          <View style={styles.button}>
            <Button type="clear" title="" icon={
              <Icon
                name="thumb-down"
                size={25}
                color={Colors.red}
            /> }
              onPress={() => {room.voteRoom(room.id, -1), setVoted(true)}} /> 
          </View>
      </View>
    </ListItemTransition>
  );
};