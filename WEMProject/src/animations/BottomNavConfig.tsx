import React from 'react';

export const BottomNavConfig = () => {
    return {
      screenInterpolator: sceneProps => {
        const { position, scene } = sceneProps;
        
        const thisSceneIndex = scene.index;

        const opacity = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex],
          outputRange: [0, 0]
        })

        return { transform: [{ translateY }] };
      },
    }
  }