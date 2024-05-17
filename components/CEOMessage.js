import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const CEOMessage = () => {
  return (
    <View className="mb-[50px] flex flex-col items-center space-y-0">
      <View className="mb-2 flex flex-col items-center space-y-0 rounded-3xl">
        <Text className="font-bold text-xl text-black my-2">CEO's Message</Text>
        <Image
          placeholder={blurhash}
          transition={1000}
          source={require("../assets/images/Visa/CEO.webp")}
          className="w-[320px] h-[320px] rounded-lg mb-3"
        />
        <Text className="font-light text-md text-center justify-evenly px-5 py-2 bg-blue-100 rounded-3xl">
          ILAAHI INTERNATIONAL Win ICEF Agent training certifate at
          international level and become certified agent. You don’t need to go
          to untrained agents. Come to ILAAHI INTERNATIONAL and consult with
          trained ICEF agent. we deal with immigration, study in abroad and
          tourism. we contact with international universities directly and get
          admissions for students.
        </Text>
      </View>
    </View>
  );
};

export default CEOMessage;
