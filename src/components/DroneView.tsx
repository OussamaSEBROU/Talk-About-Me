import React, { useEffect } from 'react';
import { Canvas, Path, Group, Skia, useSharedValueEffect, useValue } from '@shopify/react-native-skia';
import Animated, { useSharedValue, withTiming, Easing, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useWindowDimensions } from 'react-native';

const DroneView = ({ onComplete }: { onComplete: () => void }) => {
  const { width, height } = useWindowDimensions();
  const progress = useSharedValue(0);

  // Simple Wireframe paths for Palestine and Gaza
  // In production, these should be loaded from a GeoJSON to SVG converter
  const palestinePath = "M50,10 L60,30 L55,80 L45,100 L40,80 L45,30 Z"; 
  const gazaPath = "M47,75 L52,75 L52,85 L47,85 Z";

  useEffect(() => {
    progress.value = withTiming(1, {
      duration: 4000,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    }, () => {
      // Transition to the Radiant Map
      if (onComplete) onComplete();
    });
  }, []);

  return (
    <Canvas style={{ flex: 1, backgroundColor: '#000000' }}>
      <Group transform={[{ scale: interpolate(progress.value, [0, 1], [1, 15]) }]}>
        <Path
          path={palestinePath}
          color="#0A1128"
          style="stroke"
          strokeWidth={1}
          opacity={interpolate(progress.value, [0, 0.8], [1, 0])}
        />
        <Path
          path={gazaPath}
          color="#FF0000"
          style="stroke"
          strokeWidth={0.5}
        />
      </Group>
    </Canvas>
  );
};

export default DroneView;
