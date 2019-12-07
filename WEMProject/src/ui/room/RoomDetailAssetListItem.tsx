import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './RoomDetailAssetListItem.styles';
import { Subtitle } from '../TextHeaders';
import { Asset } from '../../data/asset/asset';

type AssetPreview = {
  asset: Asset;
  navigateAsset: (asset: Asset) => void;
}

export const RoomDetailAssetListItem: React.FunctionComponent<AssetPreview> = (asset): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => asset.navigateAsset(asset.asset)}>
          <View style={{ width: 'auto', flexDirection: 'row', justifyContent: 'center' }}>
            <Subtitle>{asset.asset.name}</Subtitle>
          </View>
      </TouchableOpacity>
    </View>
  );
};