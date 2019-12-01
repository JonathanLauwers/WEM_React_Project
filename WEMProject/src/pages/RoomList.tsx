import React from 'react';
import { View, FlatList } from 'react-native';
import { RoomListItem } from '../ui';
import { ROOMS } from '../../assets/rooms.js';
import { styles } from './RoomList.styles';
import { Colors } from '../styles/_colors';
import { NavigationStackOptions } from 'react-navigation-stack';
import { useNavigation } from '../hooks';
import { Room } from '../data';

export const RoomList: React.FunctionComponent & { navigationOptions?: NavigationStackOptions } = (): JSX.Element => {
    const rooms: Room[] = ROOMS;
    const navigation = useNavigation();
    const navigateRoom = (room: Room) => navigation.navigate('Room', {room: room});

    const renderItem = ({ item }: { item: Room }): JSX.Element => {
        return (
            <View style={styles.roomContainer}>
                <RoomListItem {...item} navigateRoom={navigateRoom}/>
            </View>
        );
    };

    const RenderSeparator = () => <View style={styles.separator}></View>;

    return (
        <FlatList data={rooms} renderItem={renderItem} ItemSeparatorComponent={RenderSeparator} keyExtractor={room => room.id} />
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