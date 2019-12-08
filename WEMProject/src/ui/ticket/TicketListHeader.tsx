import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './TicketListHeader.styles';
import { H1, Subtitle } from '../TextHeaders';
import { Asset } from '../../data';

type TicketListHeader = {
  assetDetails: Asset;
}

export const TicketListHeader: React.FunctionComponent<TicketListHeader> = (asset): JSX.Element => {
  return (
    <View style={styles.container}>
        <H1>{asset.assetDetails.name}</H1>
    </View>
  );
};