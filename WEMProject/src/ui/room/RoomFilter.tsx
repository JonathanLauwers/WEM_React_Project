import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './RoomFilter.styles';
import { H2 } from '../TextHeaders';

type Props = {
  filterRooms: any;
}

export const RoomFilter: React.FunctionComponent<Props> = (props): JSX.Element => {

  const [numberOfVotes, setNumberOfVotes] = React.useState('');

  const filterRooms = () => {
    props.filterRooms(numberOfVotes);
  };

  return (
    <View style={styles.container}>
        <TextInput
          key="numberOfVotes"
          style={styles.input}
          keyboardType="numeric"
          placeholder="0"
          value={numberOfVotes}
          onChangeText={text => setNumberOfVotes(text)}
        />
        <View style={styles.button}>
          <Button title="Filter score" onPress={() => console.log("Filter", numberOfVotes)} />
        </View>
    </View>
  );
};