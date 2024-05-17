import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Staff = (props) => {
  return (
    <View className="rounded-xl bg-white w-[150px] h-[250px] shadow-[0px 20px 30px -10px rgb(38, 57, 77)]">
      <View className="mt-2 ml-2">
        <Image
          source={props.image}
          placeholder={blurhash}
          transition={1000}
          className="w-[135px] h-[150px] rounded-xl"
        />
      </View>
      <Text className="mt-3 text-center text-black font-bold">
        {props.title}
      </Text>
      <Text className="mt-3 text-center text-gray-600 font-bold">
        {props.Designation}
      </Text>
    </View>
  );
};

export default Staff;
