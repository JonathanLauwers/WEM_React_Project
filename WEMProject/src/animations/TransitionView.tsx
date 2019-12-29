import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';

type Props = {
  data: any, 
}

export const TransitionView: React.FunctionComponent<Props> & { navigationOptions?: NavigationStackOptions } = (props): JSX.Element => {
  const {...rest} = props;

  return (
    <Animatable.View
    animation="fadeIn"
    duration={750}
    useNativeDriver
    {...rest}
    />
  );
}

export default TransitionView;
