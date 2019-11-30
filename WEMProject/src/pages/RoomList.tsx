import React from 'react';
import { View, FlatList } from 'react-native';
import { RoomPreview } from '../ui';
import { ROOMS } from '../../assets/rooms.js';
import { styles } from './RoomList.styles';
import { NavigationStackOptions } from 'react-navigation-stack';
import { useNavigation } from '../hooks';

type Room = {
    id: string,
    name: string,
    happinessScore: number,
};

export const RoomList: React.FunctionComponent & { navigationOptions?: NavigationStackOptions } = (): JSX.Element => {
    const rooms: Room[] = ROOMS;
    const navigation = useNavigation();
    const navigateRoom = (id: string) => navigation.navigate('Room', {id: id});

    const renderItem = ({ item }: { item: Room }): JSX.Element => {
        return (
            <View style={styles.roomContainer}>
                <RoomPreview {...item} navigateRoom={navigateRoom}/>
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
        backgroundColor: '#00FFFF'
    },
    headerTitleStyle: {
        color: '#FFF'
    }
};