import { Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function TopBar() {
  return (
    <View className="flex flex-row space-x-4 items-center bg-gray-200 p-4 mx-5 rounded-xl shadow-2xl mt-3">
      <Image
        placeholder={blurhash}
        source={require("../assets/logo/logo.png")}
        className="rounded-lg pl-2 w-[60px] h-[60px]"
      />
      <View>
        <Text className="font-extrabold items-center text-center text-[15px]">
          NEW ILAAHI INTERNATIONAL
        </Text>
        <Text className="font-extrabold items-center text-center text-[10px]">
          Employment Promoter (SMC-PVT LTD.)
        </Text>
      </View>
    </View>
  );
}
