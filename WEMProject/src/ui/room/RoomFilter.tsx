import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './RoomFilter.styles';
import { H2 } from '../TextHeaders';
import { CheckBox } from 'react-native-elements'

type Props = {
  filterRooms: any,
  sortRooms: any,
  sort: boolean,
  clearFilteredRooms: any,
}

export const RoomFilter: React.FunctionComponent<Props> = (props): JSX.Element => { 
  const [filterValue, setFilterValue] = React.useState();

  const checkBoxPress = () => {
    props.sortRooms(!props.sort);
  }

  return (
    <View style={styles.container}>
      <CheckBox
        title='Sort'
        onPress={() => {checkBoxPress()}}
        checked={props.sort}
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
        <Button title="Clear" onPress={() => {setFilterValue(""), props.clearFilteredRooms()}}></Button>
      </View>
    </View>
  );
};