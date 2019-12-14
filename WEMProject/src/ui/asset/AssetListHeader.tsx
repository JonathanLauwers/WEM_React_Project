import React from 'react';
import { View } from 'react-native';
import { styles } from './AssetListHeader.styles';
import { H1, Subtitle } from '../TextHeaders';
import { Room } from '../../data/room/room';

type AssetListHeader = {
  happinessScore: number;
}

export const AssetListHeader: React.FunctionComponent<AssetListHeader> = (room): JSX.Element => {
  return (
    <View style={styles.container}>
        <H1>Assets</H1>
        <Subtitle>Happiness score: {room.happinessScore}</Subtitle>
    </View>
  );
};