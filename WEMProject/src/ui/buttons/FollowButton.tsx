import React from "react";
import { View, Text } from "react-native";
import { Colors } from "../../styles/_colors";
import { TouchableHighlight } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "./FollowButton.styles";

type Props = {
  username: string;
}

export const FollowButton: React.FunctionComponent<Props> = (props): JSX.Element => {
  return (
    <TouchableHighlight style={styles.container} underlayColor={Colors.accentDark} onPress={() => console.log(`Follow ${props.username}`)}>
      <View style={styles.row}>
        <Icon name="plus" color={Colors.accentDark}/>
        <Text style={styles.text}>&nbsp;Follow</Text>
      </View>
    </TouchableHighlight>
  );
};