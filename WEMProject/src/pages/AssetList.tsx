import React from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation } from '../hooks';
import { styles } from './AssetList.styles';
import { Colors } from '../styles/_colors';
import { NavigationStackOptions } from 'react-navigation-stack';
import { AssetListHeader } from '../ui';
import { ASSETS } from '../../assets/assets.js';
import { Asset } from '../data';
import { AssetListItem } from '../ui/room/AssetListItem';

export const AssetList: React.FunctionComponent & { navigationOptions?: NavigationStackOptions } = (): JSX.Element => {
  const navigation = useNavigation();
  const { room } = navigation.state.params;
  const assets: Asset[] = ASSETS;
  //(ASSETS as Asset[]).find(asset => asset.roomId === room.id);
  const navigateAsset = (asset: Asset) => navigation.navigate('Asset', { asset: asset });

  const renderItem = ({ item }: { item: Asset }): JSX.Element => {
    return (
      <View style={styles.roomContainer}>
        <AssetListItem asset={item} navigateAsset={navigateAsset} />
      </View>
    );
  };
  const RenderSeparator = () => <View style={styles.separator}></View>;

  return (
    <View style={styles.roomContainer}>
      <AssetListHeader roomDetails={room}></AssetListHeader>
      <FlatList data={assets} renderItem={renderItem} ItemSeparatorComponent={RenderSeparator} keyExtractor={asset => asset.id} />
    </View>
  );
}


AssetList.navigationOptions = () => ({
  title: "Assets",
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTitleStyle: {
    color: '#FFF'
  },
  headerBackTitleStyle: {
    color: '#FFF'
  }
});