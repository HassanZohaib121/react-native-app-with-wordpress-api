import { Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const University = ({ id, img, classes, title }) => {
  return (
    <View key={id}>
      <Image
        placeholder={blurhash}
        source={img}
        className={classes}
      />
      <Text className='text-center font-bold capitalize mt-3'>{title}</Text>
    </View>
  );
};

export default University;
