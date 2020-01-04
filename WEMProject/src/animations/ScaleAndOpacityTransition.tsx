import React from 'react';

export const ScaleAndOpacityTransition = () => {
    return {
      screenInterpolator: sceneProps => {
        const { position, scene, index } = sceneProps;

        const thisSceneIndex = scene.index;

        const opacity = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex - 0.5, thisSceneIndex],
          outputRange: [0, 1, 1]
        })

        const scale = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
          outputRange: [4, 1, 1],
        })

        const scaleWithOpacity = { opacity, transform: [{ scaleX: scale }, { scaleY: scale }] }

        return scaleWithOpacity;
      },
    }
  }