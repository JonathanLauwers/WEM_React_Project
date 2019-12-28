import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { styles } from './AssetListItem.styles';
import { Subtitle } from '../TextHeaders';
import { Asset } from '../../data/asset/asset';

type AssetPreview = {
  asset: Asset;
  navigateAsset: (asset: Asset) => void;
  navigateCamera: () => void;
}

export const AssetListItem: React.FunctionComponent<AssetPreview> = (asset): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => asset.navigateAsset(asset.asset)}>
          <View style={styles.listItem}>
            <Subtitle>{asset.asset.name}</Subtitle>
            <TouchableOpacity onPress={() => asset.navigateCamera()}>
              <Subtitle>Add picture</Subtitle>
            </TouchableOpacity>
          </View>
      </TouchableOpacity>
    </View>
  );
};