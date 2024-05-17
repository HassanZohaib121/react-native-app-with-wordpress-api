import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import Colors from "../Shared/Colors";
import { Link } from "expo-router";

const Map = (props) => {
  return (
    <View className=" ">
      <View className="mx-3">
        <Text className="font-bold text-xl items-center text-center mt-5 mx-4">
          {props.title}
        </Text>
        <View>
          <View className="flex flex-row mt-3  bg-blue-100 p-6 rounded-xl">
            <Ionicons name="map" size={24} color={Colors.grey} />
            <Link href={`geo:${props.location}`} className="ml-3">
              <Text className="font-light text-light ml-4">
                {props.locationText}
              </Text>
            </Link>
          </View>
          {!props.phone1 || props.phone1 === "" ? (
            ""
          ) : (
            <View className="flex flex-row mt-5 ml-3">
              <Ionicons name="call" size={24} color={Colors.grey} />
              <Link href={`tel:${props.phone1}`} className="text-light text-center text-blue-400 font-bold underline ml-4">
                {props.phone1Text}
              </Link>
            </View>
          )}
          {!props.phone2 || props.phone2 === "" ? (
            ""
          ) : (
            <View className="flex flex-row mt-5 ml-3">
              <Ionicons name="call" size={24} color={Colors.grey} />
              <Link href={`tel:${props.phone2}`} className="text-light text-center text-blue-400 font-bold underline ml-4">
                {props.phone2Text}
              </Link>
            </View>
          )}
          {!props.phone3 || props.phone3 === "" ? (
            ""
          ) : (
            <View className="flex flex-row mt-5 ml-3">
              <Ionicons name="call" size={24} color={Colors.grey} />
              <Link href={`tel:${props.phone3}`} className="text-light text-center text-blue-400 font-bold underline ml-4">
                {props.phone3Text}
              </Link>
            </View>
          )}
        </View>
      </View>
    </View >
  );
};

export default Map;
