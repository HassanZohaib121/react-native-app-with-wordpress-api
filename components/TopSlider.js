import { Dimensions, FlatList, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const TopSlider = ({ images }) => {
  const flatlistRef = useRef();
  const screenWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    flatlistRef.current?.scrollToIndex({
      index: activeIndex,
      animated: true,
    });
  }, [activeIndex]);

  const getItemLayout = (_, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });

  if (images.length === 0) {
    return null; // Render nothing if there are no images
  }

  return (
    <>
      <FlatList
        data={images}
        pagingEnabled
        horizontal
        snapToInterval={screenWidth - 80}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => {
          return (
            <View
              className="w-[345px] h-[200px] ml-1 mr-1 rounded-lg"
              key={item.id}
            >
              <View>
                <View className="blur-lg">
                  <Image
                    placeholder={blurhash}
                    source={item.image}
                    className="w-[330px] h-[190px] ml-2 mr-1 rounded-lg"
                  />
                </View>
                <View className="absolute ">
                  <Text className="text-white blur-lg mt-32 backdrop-blur-sm bg-black/50 mx-12 font-bold">
                    {item.title}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </>
  );
};

export default TopSlider;
