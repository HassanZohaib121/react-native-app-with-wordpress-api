import { View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { Link, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";


import ContactForm from "../../components/ContactForm";
import TopBar from "../../components/LogoBar";
import GoBack from "../../components/go-back";
// import Login from "../../components/Login";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Contact() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Contact",
    });
  }, []);
  return (
    <SafeAreaView>
      <GoBack text={"Contact Us"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopBar />
        <Text className="font-extrabold text-3xl text-center my-5">
          Get in touch with us
        </Text>
        <View className="items-center mb-2">
          <Image
            placeholder={blurhash}
            source={require("../../assets/images/staff pics/akram.webp")}
            className="w-[100px] h-[100px] rounded-full mb-2"
          />
          <View className="flex items-center  mx-6">
            <Text className="font-light text-center">
              Hi, I’m Akram. Need help? Use the form below or email me at:
            </Text>
            <Link href="mailto:info@ilaahi.com" className="font-bold mt-2 text-blue-400">
              info@ilaahi.com
            </Link>
            <Text className=" font-medium text-center my-1">
              Or Call at:
            </Text>
            <Link href='tel:+923111444187' className="font-bold my-1 text-blue-400">+923111444187</Link>
          </View>
        </View>
        <ContactForm />
        <View className="p-2 m-6">
          <Text className="font-light text-center mb-3 ">
            We have Offices in Pakistan, Europe, Uk and UAE.
          </Text>
          <Text className=" font-semibold text-center mb-3">Visit us at:</Text>
          <Link
            href={"/(pages)/offices"}
            className=" bg-blue-500 text-center text-white p-3 font-bold text-xl rounded-xl shadow-2xl shadow-black"
          >
            Our Offices
          </Link>
        </View>
        <View className="mb-20"></View>
      </ScrollView>
    </SafeAreaView>
  );
}
