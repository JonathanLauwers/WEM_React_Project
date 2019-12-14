import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './RoomFilter.styles';
import { H2 } from '../TextHeaders';

type RoomFilter = {
  
}

export const RoomFilter: React.FunctionComponent<RoomFilter> = (room): JSX.Element => {
  return (
    <View style={styles.container}>
        <TextInput
          key="numberOfVotes"
          style={styles.input}
          keyboardType="numeric"
          placeholder="0"
        />
        <View style={styles.button}>
          <Button title="Filter score" onPress={() => console.log("Filter")} />
        </View>
    </View>
  );
};