import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { styles } from './AssetListItem.styles';
import { Subtitle } from '../TextHeaders';
import { Asset } from '../../data/asset/asset';
import ListItemTransition from '../../animations/ListItemTransition';

type AssetPreview = {
  asset: Asset;
  index: number,
  navigateAsset: (asset: Asset) => void;
  navigateCamera: () => void;
}

export const AssetListItem: React.FunctionComponent<AssetPreview> = (asset): JSX.Element => {
  return (
    <ListItemTransition style={styles.container} index={asset.index}>
      <TouchableOpacity onPress={() => asset.navigateAsset(asset.asset)}>
          <View style={styles.listItem}>
            <Subtitle>{asset.asset.name}</Subtitle>
            <TouchableOpacity onPress={() => asset.navigateCamera()}>
              <Subtitle>Add picture</Subtitle>
            </TouchableOpacity>
          </View>
      </TouchableOpacity>
    </ListItemTransition>
  );
};