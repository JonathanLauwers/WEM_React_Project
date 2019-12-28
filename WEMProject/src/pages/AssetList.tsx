import React, { useEffect } from 'react';
import { FlatList, View, TouchableWithoutFeedback, Text, ActivityIndicator} from 'react-native';
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

type Props = {
  assets: Asset[];
  isLoading: boolean;
  getAssetList: () => (dispatch: any) => Promise<void>;
}

export const AssetList: React.FunctionComponent & { navigationOptions?: NavigationStackOptions } = (props): JSX.Element => {
  const navigation = useNavigation();
  const { room } = navigation.state.params;
  const navigateTicket = (asset: Asset) => navigation.navigate('Ticket', { asset: asset });
  const navigateCamera = () => navigation.navigate('Camera');

  useEffect(() => {
    props.getAssetList(room.id);
  }, [])
  
  const renderItem = ({ item }: { item: Asset }): JSX.Element => {
    return (
        <View style={styles.assetContainer}>
            <AssetListItem asset={item} navigateAsset={navigateTicket} navigateCamera={navigateCamera}/>
        </View>
    );
};

const RenderSeparator = () => <View style={styles.separator}></View>;

    return (
      <View style={styles.assetContainer}>
        <AssetListHeader happinessScore={room.happinessScore}></AssetListHeader>
        {props.isLoading ? (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color={Colors.darkBlue} />
            </View>
            ) : ( 
              <View>
              <FlatList data={props.assets} renderItem={renderItem} ItemSeparatorComponent={RenderSeparator} keyExtractor={asset => asset.id} />
              </View>
            )}
        </View>
    );
  }


AssetList.navigationOptions = ({navigation}) => ({
  title: navigation.state.params.room.name,
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTitleStyle: {
    color: '#FFF'
  },
  headerBackTitleStyle: {
    color: '#FFF'
  },
  headerRight: (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('AllAssetsList')}> 
        <Text style={styles.headerRight}>View all assets</Text>
    </TouchableWithoutFeedback>
  )
});

const mapStateToProps = state => ({ assets: state.asset.list, isLoading: state.asset.isLoadingList });
const mapDispatchToProps = dispatch => ({ getAssetList: (id: string) => dispatch(getAssetList(id)) });
const AssetListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetList);
export default AssetListPage;