import React from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation } from '../hooks';
import { styles } from './AssetList.styles';
import { Colors } from '../styles/_colors';
import { NavigationStackOptions } from 'react-navigation-stack';
import { ASSETS } from '../../assets/assets.js';
import { Asset } from '../data';
import { AssetListItem } from '../ui';

export const AllAssetsList: React.FunctionComponent & { navigationOptions?: NavigationStackOptions } = (): JSX.Element => {
  const navigation = useNavigation();
  const assets: Asset[] = ASSETS;
  const navigateTicket = (asset: Asset) => navigation.navigate('Ticket', { asset: asset });

  const renderItem = ({ item }: { item: Asset }): JSX.Element => {
    return (
        <View style={styles.assetContainer}>
            <AssetListItem asset={item} navigateAsset={navigateTicket}/>
        </View>
    );
};
const RenderSeparator = () => <View style={styles.separator}></View>;

    return (
      <View style={styles.assetContainer}>
        <FlatList data={assets} renderItem={renderItem} ItemSeparatorComponent={RenderSeparator} keyExtractor={asset => asset.id} />
      </View>
    );
  }


AllAssetsList.navigationOptions = () => ({
  title: "All assets",
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