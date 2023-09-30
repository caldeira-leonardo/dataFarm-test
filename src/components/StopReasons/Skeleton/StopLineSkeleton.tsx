import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const StopLineSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <SkeletonPlaceholder.Item
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingTop={4}
        paddingBottom={4}
        paddingLeft={4}>
        <SkeletonPlaceholder.Item
          justifyContent="flex-start"
          flexDirection="row"
          alignItems="center">
          <SkeletonPlaceholder.Item width={35} height={35} borderRadius={35} />
          <SkeletonPlaceholder.Item
            flexDirection="column"
            justifyContent="flex-end">
            <SkeletonPlaceholder.Item
              width={200}
              height={20}
              marginBottom={3}
              marginTop={3}
              marginLeft={10}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default StopLineSkeleton;
