import React from 'react';

export const BottomNavConfig = () => {
    return {
      screenInterpolator: sceneProps => {
        const { position, scene } = sceneProps;
        
        const thisSceneIndex = scene.index;

        const opacity = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex - 0.5, thisSceneIndex],
          outputRange: [0, 1, 1]
        })

        return { transform: [{ translateY }] };
      },
    }
  }