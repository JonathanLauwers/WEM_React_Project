import React from 'react';
import { View, Text, TouchableOpacity, Button, Image } from 'react-native';
import { styles } from './AssetListItem.styles';
import { Subtitle, H1 } from '../TextHeaders';
import { Asset } from '../../data/asset/asset';
import ListItemTransition from '../../animations/ListItemTransition';
import { CircledImage } from '../CircledImage';

type AssetPreview = {
  asset: Asset;
  index: number,
  navigateAsset: (asset: Asset) => void;
  navigateCamera: (assetId: string) => void;
}

export const AssetListItem: React.FunctionComponent<AssetPreview> = (asset): JSX.Element => {
  return (
    <ListItemTransition style={styles.container} index={asset.index}>
      <TouchableOpacity onPress={() => asset.navigateAsset(asset.asset)}>
          <View style={styles.leftContainer}>
            <View style={styles.imageContainer}>
              <CircledImage size={36} base64={asset.asset.uri}/>
            </View>
            <View style={styles.header}>
              <H1>{asset.asset.name}</H1>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button style={styles.button} color="green" title="Change picture" onPress={() => {asset.navigateCamera(asset.asset.id)}} /> 
          </View>
        </View>

    </ListItemTransition>
  );
};