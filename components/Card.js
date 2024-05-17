import React from "react";
import { View, Text, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Card = (props) => {
  const router = useRouter();
  return (
    <View className="max-w-sm w-[202px] h-[240px] bg-white border border-gray-200 rounded-lg shadow">
      <Pressable onPress={() => router.push(props.link)}>
        <View>
          <Image
            className="rounded-lg pl-2 w-[200px] h-[100px]"
            placeholder={blurhash}
            transition={1000}
            source={props.image}
          />
        </View>
        <View className="px-5 pt-2 items-center">
          <Link href="">
            <Text className="mb-2 text-lg font-semibold tracking-tight text-gray-900">
              {props.title}
            </Text>
          </Link>
          <Text className="mb-3 font-normal text-sm text-center justify-evenly text-gray-700">
            {props.detail}
          </Text>
          {props.link ? (
            <Link
              href={props.link}
              className="inline-flex px-9 py-2 mb-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Learn more
            </Link>
          ) : (
            ""
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default Card;
