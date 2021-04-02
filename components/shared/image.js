import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";

const RImage = ({ src }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    Image.getSize(src, (width, height) => {
      setImageWidth(width);
      setImageHeight(height);
    });
  }, []);

  const onLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  const width = containerWidth;
  const height = containerWidth / imageWidth * imageHeight;

  return (
    <View onLayout={onLayout}>
      {imageWidth > 0 && imageHeight > 0 && (
        <Image
          style={{ width, height }}
          source={{ uri: src }}
        />
      )}
    </View>
  );
};

export default RImage;
