import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './AssetListHeader.styles';
import { H1, Subtitle } from '../TextHeaders';
import { Room } from '../../data/room/room';

type AssetListHeader = {
  roomDetails: Room;
  navigateAssetList: () => void;
}

export const AssetListHeader: React.FunctionComponent<AssetListHeader> = (room): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <H1>{room.roomDetails.name}</H1>
        <TouchableOpacity onPress={() => room.navigateAssetList()}>
          <H1>All assets</H1>
        </TouchableOpacity>
      </View>
        <Subtitle>Happiness score: {room.roomDetails.happinessScore}</Subtitle>
    </View>
  );
};