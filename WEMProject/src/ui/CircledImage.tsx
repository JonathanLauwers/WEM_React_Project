import React from 'react';
import { Image, ImageStyle } from 'react-native';

type CircledImage = {
  size: number;
  style?: ImageStyle;
  uri?: string;
}

export const CircledImage = (image: CircledImage): JSX.Element => {
  const imageStyle = {
    width: image.size,
    height: image.size,
    borderRadius: image.size / 2
  }

  return (
    <Image
          style={[imageStyle, image.style]}
          source={{
            uri: image.uri || "https://firebasestorage.googleapis.com/v0/b/fiesjev2.appspot.com/o/uploads%2F1560264396955.jpg?alt=media&token=256936ae-c394-411e-945f-a61f5301bd2d"
          }}
        />
  );
};