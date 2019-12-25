import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { RoomListItem, RoomFilter } from '../ui';
import { ROOMS } from '../../assets/rooms.js';
import { styles } from './RoomList.styles';
import { Colors } from '../styles/_colors';
import { NavigationStackOptions } from 'react-navigation-stack';
import { useNavigation } from '../hooks';
import { Room } from '../data';
import { getRoomList } from '../reducks/room';
import { H2 } from '../ui/TextHeaders';
import { connect } from 'react-redux';


type Props = {
    rooms: Room[];
    isLoading: boolean;
    getRoomList: () => (dispatch: any) => Promise<void>;
    voteRoom: () => (dispatch: any) => Promise<void>;
}

const RoomList: React.FunctionComponent<Props> & { navigationOptions?: NavigationStackOptions } = (props): JSX.Element => {
    const navigation = useNavigation();
    const navigateRoom = (room: Room) => navigation.navigate('Asset', { room: room });
    const navigateMaps = (room: Room) => navigation.navigate('Maps', { room: room });

     useEffect(() => {
         props.getRoomList();
     }) 

    const voteTicket = (id: string, rating: number) => props.voteRoom(id, rating);

    const renderItem = ({ item }: { item: Room }): JSX.Element => {
        return (
            <View style={styles.roomContainer}>
                <RoomListItem {...item} navigateRoom={navigateRoom} navigateMaps={navigateMaps} voteTicket={voteTicket}/>
            </View>
        );
    };

    const RenderSeparator = () => <View style={styles.separator}></View>;

    return (
        <View>   
            {props.rooms && props.rooms.length > 0 ?  
            <View>
                <RoomFilter/>
                <FlatList 
                    data={props.rooms}
                    renderItem={renderItem} 
                    ItemSeparatorComponent={RenderSeparator} 
                    keyExtractor={room => room.id} 
                />
            </View> : 
            <View style={styles.loader}>
                <ActivityIndicator size="large" color={Colors.darkBlue}/> 
            </View>
            }
        </View>

    );
};

RoomList.navigationOptions = {
    title: 'Rooms',
    headerStyle: {
        backgroundColor: Colors.primary
    },
    headerTitleStyle: {
        color: '#FFF'
    }
};

const mapStateToProps = state => ({ rooms: state.room.list, isLoading: state.room.isLoadingList });
const mapDispatchToProps = dispatch => ({ getRoomList: () => dispatch(getRoomList()), voteRoom: (id: string, rating: number) => dispatch(voteRoom(id, rating)) });
const RoomListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomList);
export default RoomListPage;