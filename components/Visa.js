import { View, Text, ScrollView, ActivityIndicator, Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { Link, router } from "expo-router";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Visa = ({ type, detail, visa, isLoading, page }) => {
  return (
    <View>
      <View className="flex flex-col mt-3 mx-4">
        <Text className="text-lg text-center">{type}</Text>
        <Text className="text-md text-center mt-2">{detail}</Text>
      </View>
      <Text className="font-bold text-center text-2xl my-2 capitalize">
        Available {`${page}`} Countries
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          isLoading ? (
            <View className='container justify-center items-center mx-20 mt-16'>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            visa.map(({ id, title, image }) => {
              return (
                <View className="mx-2 my-3 bg-gray-500 rounded-xl" key={id}>
                  <Pressable onPress={() => router.push(`consultancy/${page}Page/detail/${id}`)}>
                    <View className="mx-1 my-1 rounded-lg">
                      <Image
                        placeholder={blurhash}
                        source={image}
                        className="w-[250px] h-[130px] rounded-lg"
                      />
                      <Text className='text-center font-bold capitalize mt-2 text-lg text-white'>{title}</Text>
                    </View>
                  </Pressable>
                </View>
              );
            })
          )}
        <View className="mb-16"></View>
      </ScrollView >
    </View >
  );
};

export default Visa;
