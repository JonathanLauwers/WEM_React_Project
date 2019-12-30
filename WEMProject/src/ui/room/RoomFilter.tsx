import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './RoomFilter.styles';
import { H2 } from '../TextHeaders';

type Props = {
  filterRooms: any,
  clearFilteredRooms: any,
}

export const RoomFilter: React.FunctionComponent<Props> = (props): JSX.Element => { 
  const [filterValue, setFilterValue] = React.useState();
 
  return (
    <View style={styles.container}>
        <TextInput
          key="happinessScore"
          style={styles.input}
          keyboardType="numeric"
          placeholder="0"
          value={filterValue}
          onChangeText={text => {props.filterRooms(text), setFilterValue(text)}}
        />
        <Button title="Clear" onPress={() => {props.clearFilteredRooms(), setFilterValue("")}}></Button>
    </View>
  );
};