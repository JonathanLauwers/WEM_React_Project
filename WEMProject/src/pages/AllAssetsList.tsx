import React, { useEffect } from 'react';
import { FlatList, View, TouchableWithoutFeedback, Text} from 'react-native';
import { useNavigation } from '../hooks';
import { styles } from './AssetList.styles';
import { Colors } from '../styles/_colors';
import { NavigationStackOptions } from 'react-navigation-stack';
import { AssetListHeader } from '../ui';
import { ASSETS } from '../../assets/assets.js';
import { Asset } from '../data';
import { getAssetList } from '../reducks/asset';
import { AssetListItem } from '../ui';
import { connect } from 'react-redux';
import TransitionView from '../animations/TransitionView';
import RenderSeparatorTransition from '../animations/RenderSeparatorTransition';

type Props = {
  assets: Asset[];
  isLoading: boolean;
  getAssetList: () => (dispatch: any) => Promise<void>;
}

export const AllAssetsList: React.FunctionComponent & { navigationOptions?: NavigationStackOptions } = (props): JSX.Element => {
  const navigation = useNavigation();
  const assets: Asset[] = ASSETS;
  const navigateTicket = (asset: Asset) => navigation.navigate('Ticket', { asset: asset });

  useEffect(() => {
    props.getAssetList();
  }) 

  const renderItem = ({ item, index }: { item: Asset }): JSX.Element => {
    return (
        <View style={styles.assetContainer}>
            <AssetListItem asset={item} index={index} navigateAsset={navigateTicket}/>
        </View>
    );
};
const RenderSeparator = () => <View style={styles.separator}></View>;

    return (
      <TransitionView style={styles.assetContainer}>
        <FlatList data={props.assets} renderItem={renderItem}  ItemSeparatorComponent={RenderSeparator} keyExtractor={asset => asset.id} />
      </TransitionView>
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
const mapStateToProps = state => ({ assets: state.asset.list, loading: state.asset.isLoadingList });
const mapDispatchToProps = dispatch => ({ getAssetList: () => dispatch(getAssetList()) });
const AllAssetsListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllAssetsList);
export default AllAssetsListPage;