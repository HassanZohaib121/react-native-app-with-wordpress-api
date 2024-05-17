import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Choose = ({ title, image, detail, expert }) => {
  let img = image
    ? image
    : require("../assets/images/law/services/lawyers/placeholder.webp");
  return (
    <View className="max-w-sm w-[255px] h-[520px] mb-5 mx-3 bg-white border border-gray-200 rounded-lg shadow items-center">
      {image ?
        <View className="items-center">
          <Image
            placeholder={blurhash}
            className="rounded-lg items-center w-[235px] h-[200px] mt-2"
            source={img}
          />
        </View> : ""}
      <View className="px-5 pt-2 items-center">
        {title ?
          <Text className="mb-2 text-lg font-semibold text-gray-900 text-center">
            {title}
          </Text> : ""}
        {detail ?
          <Text className="mb-3 font-normal text-sm text-center justify-evenly text-gray-700">
            {detail}
          </Text> : ""}
        {expert ? (
          <View>
            <Text className="font-bold text-center">Expert In: </Text>
            <Text className="mb-3 font-normal text-sm text-center justify-evenly text-gray-700">
              {expert}
            </Text>
          </View>
        ) : (
          ""
        )}
      </View>
    </View>
  );
};

export default Choose;
