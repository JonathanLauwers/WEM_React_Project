import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { RoomListItem, RoomFilter } from '../ui';
import { ROOMS } from '../../assets/rooms.js';
import { styles } from './RoomList.styles';
import { Colors } from '../styles/_colors';
import { NavigationStackOptions } from 'react-navigation-stack';
import { useNavigation } from '../hooks';
import { Room } from '../data';
import { getRoomList, voteRoom } from '../reducks/room';
import { H2 } from '../ui/TextHeaders';
import { connect } from 'react-redux';


type Props = {
    isLoading: boolean;
    getRoomList: () => (dispatch: any) => Promise<void>;
    postVote: any;
    isVoting: boolean;
    filterRooms: any;
}

const RoomList: React.FunctionComponent<Props> & { navigationOptions?: NavigationStackOptions } = (props): JSX.Element => {
    const navigation = useNavigation();
    const navigateRoom = (room: Room) => navigation.navigate('Asset', { room: room });
    const navigateMaps = (room: Room) => navigation.navigate('Maps', { room: room });
    const voteRoom = (id: string, rating: number) => props.postVote(id, rating);
    const filterRooms = (happinessScore: number) => props.filterRooms(happinessScore);

     useEffect(() => {
         props.getRoomList();
     }) 

    const renderItem = ({ item }: { item: Room }): JSX.Element => {
        return (
            <View style={styles.roomContainer}>
                <RoomListItem {...item} navigateRoom={navigateRoom} navigateMaps={navigateMaps} voteRoom={voteRoom}/>
            </View>
        );
    };

    const RenderSeparator = () => <View style={styles.separator}></View>;

    return (
        <View>   
            {props.rooms && props.rooms.length > 0 ?  
            <View>
                <RoomFilter filterRooms={filterRooms} rooms={props.rooms}/>
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

const mapStateToProps = state => ({ rooms: state.room.list, isLoading: state.room.isLoadingList, isVoting: state.room.isVoting });
const mapDispatchToProps = dispatch => {
    return {
        getRoomList: () => dispatch(getRoomList()),
        postVote: (id: string, rating: number) => dispatch(voteRoom(id, rating)),
        filterRooms: (happinessScore: number) => dispatch(filterRooms(happinessScore)),
    };
}
const RoomListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomList);
export default RoomListPage;