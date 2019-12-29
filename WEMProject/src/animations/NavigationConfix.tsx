import React from 'react';

export const NavigationConfig = () => {
    return {
      screenInterpolator: sceneProps => {
        const { position, scene, layout } = sceneProps;

        const height = layout.initHeight

        const thisSceneIndex = scene.index;

        const translateY = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
          outputRange: [height, 0, 0]
        })

        return { transform: [{ translateY }] };
      },
    }
  }