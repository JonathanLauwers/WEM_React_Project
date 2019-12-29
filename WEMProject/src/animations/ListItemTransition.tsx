import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import { TransitionDuration } from '../styles/_transitions';

type Props = {
  data: any, 
}

export const ListItemTransition: React.FunctionComponent<Props> & { navigationOptions?: NavigationStackOptions } = (props): JSX.Element => {
  const {index, ...rest} = props;

  const duration = TransitionDuration.long;

  return (
    <Animatable.View
    animation="fadeIn"
    duration={duration}
    delay={index ? (index * duration) / 5 : 0}
    useNativeDriver
    {...rest}
    />
  );
}

export default ListItemTransition;
