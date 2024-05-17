import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Link, useRouter } from "expo-router";
import { IconButton } from "react-native-paper";

const GoBack = ({ text }) => {
  const router = useRouter();
  return (
    <View className="p-4 mb-0 flex flex-row bg-[#b09393] rounded-3xl shadow-2xl shadow-slate-950">
      <View className="p-1 bg-white rounded-full">
        <Link href={"../"}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Link>
      </View>
      <Text className="font-bold text-xl text-white text-center pl-4 capitalize">
        {text}
      </Text>
      <View className="absolute right-5 top-2.5">
        <IconButton
          icon="home"
          size={22}
          color={"#000000"}
          className="bg-white rounded-full mr-3"
          onPress={() => router.push("/(tabs)/(home)")}
        />
      </View>
    </View>
  );
};

export default GoBack;
