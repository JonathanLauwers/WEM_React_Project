import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { RoomListItem } from '../ui';
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
}

export const RoomList: React.FunctionComponent<Props> & { navigationOptions?: NavigationStackOptions } = (props): JSX.Element => {
    const rooms: Room[] = ROOMS; //wordt nog verandert met redux

    const navigation = useNavigation();
    const navigateRoom = (room: Room) => navigation.navigate('Asset', { room: room });

    /*  useEffect(() => {
         props.getRoomList();
     }) */

    const renderItem = ({ item }: { item: Room }): JSX.Element => {
        return (
            <View style={styles.roomContainer}>
                <RoomListItem {...item} navigateRoom={navigateRoom} />
            </View>
        );
    };

    const RenderSeparator = () => <View style={styles.separator}></View>;

    return (
        <View>
            {props.isLoading ? (
                <H2>Loading...</H2>
            ) : (
                <FlatList 
                    data={rooms}
                    renderItem={renderItem} 
                    ItemSeparatorComponent={RenderSeparator} 
                    keyExtractor={room => room.id} 
                />
            )}
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

const mapStateToProps = state => ({ rooms: state.room.list, loading: state.room.isLoadingList });
const mapDispatchToProps = dispatch => ({ getRoomList: () => dispatch(getRoomList()) });
const RoomListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomList);
export default RoomListPage;