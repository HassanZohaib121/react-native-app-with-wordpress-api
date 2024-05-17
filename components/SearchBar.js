import { View, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../Shared/Colors";

export default function SearchBar() {
  return (
    <View className="flex flex-row bg-white p-4 mx-5 rounded-3xl shadow-2xl mt-3">
      <Ionicons name="search" size={24} color={Colors.grey} className="mr-6" />
      <TextInput placeholder="Search                                                                         ‎" />
    </View>
  );
}
