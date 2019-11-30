import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '../hooks';



export const RoomDetail: React.FunctionComponent = (): JSX.Element => {
  const navigation = useNavigation();
  const { id } = navigation.state.params;
  return (
    <View>
      <Text>
        { id }
      </Text>
    </View>
  );
}