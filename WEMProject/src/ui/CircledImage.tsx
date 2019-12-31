import React from 'react';
import { Image, ImageStyle } from 'react-native';

type CircledImage = {
  size: number;
  style?: ImageStyle;
  uri?: string;
  base64?: string;
}

export const CircledImage = (image: CircledImage): JSX.Element => {
  const imageStyle = {
    width: image.size,
    height: image.size,
    borderRadius: image.size / 2
  }

  return (
    <Image
          style={ image.base64 ? ({width: 50, height: 50, borderRadius: 25}): [imageStyle, image.style]}
          source={
            image.base64 && image.base64 !== "null" ? {uri: `data:image/gif;base64,${image.base64.replace(/\s/g, "+")}`} 
            : {
            uri: image.uri || "https://firebasestorage.googleapis.com/v0/b/fiesjev2.appspot.com/o/uploads%2F1560264396955.jpg?alt=media&token=256936ae-c394-411e-945f-a61f5301bd2d"
          }}
        />
  );
};