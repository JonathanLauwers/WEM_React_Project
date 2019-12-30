import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { RoomListItem, RoomFilter } from '../ui';
import { ROOMS } from '../../assets/rooms.js';
import { styles } from './RoomList.styles';
import { Colors } from '../styles/_colors';
import { NavigationStackOptions } from 'react-navigation-stack';
import { useNavigation } from '../hooks';
import { Room } from '../data';
import { getRoomList, voteRoom, filterRoomList} from '../reducks/room';
import { H2 } from '../ui/TextHeaders';
import { connect } from 'react-redux';

import { TransitionView } from '../animations/TransitionView'


type Props = {
    rooms: Room[];
    isLoading: boolean;
    getRoomList: () => (dispatch: any) => Promise<void>;
    postVote: any;
    isVoting: boolean;
}

const RoomList: React.FunctionComponent<Props> & { navigationOptions?: NavigationStackOptions } = (props): JSX.Element => {
    const [filteredRooms, setFilteredRooms] = React.useState();

    const navigation = useNavigation();
    const navigateRoom = (room: Room) => navigation.navigate('Asset', { room: room });
    const navigateMaps = (room: Room) => navigation.navigate('Maps', { room: room });
    const voteRoom = (id: string, rating: number) => props.postVote(id, rating);
    const filterRooms = (filterVal: number) => {
        const filteredList = props.rooms.filter(room => parseInt(room.happinessScore) <= parseInt(filterVal));
        setFilteredRooms(filteredList);  
    };
    const clearFilteredRooms = () => {
        const FilteredRooms = setFilteredRooms(undefined);
    };
    console.log("FILTERROOMS", filteredRooms)

    useEffect(() => {
        props.getRoomList();
     }, []);

    const renderItem = ({ item, index }: { item: Room }): JSX.Element => {
        return (
            <View style={styles.roomContainer}>
                <RoomListItem {...item} index={index} navigateRoom={navigateRoom} navigateMaps={navigateMaps} voteRoom={voteRoom}/>
            </View>
        );
    };

    const RenderSeparator = () => <View style={styles.separator}></View>;
    return (
        <View>   
            <TransitionView>
            <RoomFilter filterRooms={filterRooms} clearFilteredRooms={clearFilteredRooms}/>
            {props.isLoading || props.isVoting ?
            <View style={styles.loader}>
                <ActivityIndicator size="large" color={Colors.darkBlue}/> 
            </View>
            : 
            <View>
                <FlatList 
                    data={filteredRooms ? filteredRooms : props.rooms}
                    renderItem={renderItem}
                    ItemSeparatorComponent={RenderSeparator} 
                    keyExtractor={room => room.id} 
                />
            </View> }
            </TransitionView>
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
    };
}
const RoomListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomList);
export default RoomListPage;