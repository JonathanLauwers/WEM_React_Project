import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './RoomFilter.styles';
import { H2 } from '../TextHeaders';
import { CheckBox } from 'react-native-elements'

type Props = {
  filterRooms: any,
  clearFilteredRooms: any,
  setFilteredRooms: any,
  switchVal: any,
  sort: boolean,
}

export const RoomFilter: React.FunctionComponent<Props> = (props): JSX.Element => { 
  const [filterValue, setFilterValue] = React.useState();
 
  return (
    <View style={styles.container}>
      <CheckBox
        title='Sort'
        checked={props.sort}
        onPress={() => props.switchVal()}
      />
      <View style={styles.filterBlock}>
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
    </View>
  );
};