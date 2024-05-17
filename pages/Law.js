import React, { useLayoutEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { router, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/FontAwesome6";
import { Image } from "expo-image";

import GoBack from "../components/go-back";

const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Law = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Law",
        });
    }, []);

    return (
        <SafeAreaView>
            <GoBack text="Law" />
            <ScrollView>
                <View>
                    <Text className="font-bold text-lg text-center mt-4">
                        NEW ILAAHI INTERNATIONAL
                    </Text>
                    <Text className="font-bold text-lg text-center">
                        LAW Firm
                    </Text>
                    <Text className="text-center font-bold mt-1 text-xl">
                        Legal Assistance for Overseas
                    </Text>
                    <Text className="text-center text-lg">Trust your future &</Text>
                    <Text className="text-xl text-center font-bold">Peaceful life</Text>
                </View>
                <View className="flex flex-col items-center space-x-6 ml-2 mt-4 bg-slate-300 p-4 rounded-tl-[150px] rounded-bl-[90px]">
                    <View className="flex flex-row pl-16 space-x-20 mb-16">
                        <View className="items-center">
                            <View className="bg-white rounded-full p-4 items-center">
                                <Ionicons name="business" size={50} color={"#000000"} />
                            </View>
                            <Text>Property</Text>
                        </View>
                        <View className="items-center">
                            <View className="bg-white rounded-full p-4 items-center">
                                <Ionicons name="person" size={50} color={"#000000"} />
                            </View>
                            <Text>Personal</Text>
                        </View>
                    </View>
                    <View className="flex flex-row pl-16 space-x-20 ">
                        <View className="items-center">
                            <View className="bg-white rounded-full p-4 items-center">
                                <Image
                                    placeholder={blurhash}
                                    source={require("../assets/images/law/family.png")}
                                    className="w-[50px] h-[50px]"
                                />
                            </View>
                            <Text>Matrimonial</Text>
                        </View>
                        <View className="items-center mr-8">
                            <View className="bg-white rounded-full p-4 items-center">
                                <Image
                                    placeholder={blurhash}
                                    source={require("../assets/images/law/passport.png")}
                                    className="w-[50px] h-[50px]"
                                />
                            </View>
                            <Text>Immigration</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View className="flex flex-row items-center bg-slate-300 mt-3 mx-5  rounded-full justify-start pl-8">
                        <Ionicons name="time" size={50} color={"#000000"} />
                        <Text>Save Time and Money</Text>
                    </View>
                    <View className="flex flex-row items-center bg-slate-300 mt-3 mx-5 rounded-full justify-start pl-8">
                        <Ionicons name="chatbubble" size={50} color={"#000000"} />
                        <Text>Best Advise that Matters</Text>
                    </View>
                    <View className="flex flex-row items-center bg-slate-300 mt-3 mx-5 rounded-full justify-start pl-8">
                        <Ionicons name="call" size={50} color={"#000000"} />
                        <Text>Privat and Confidential Calls</Text>
                    </View>
                    <View className="flex flex-row items-center bg-slate-300 mt-3 mx-5 rounded-full justify-start pl-8">
                        <Ionicons name="chatbox" size={50} color={"#000000"} />
                        <Text>Instant Advice</Text>
                    </View>
                </View>
                <View className="items-center">
                    <Text className="mt-2 font-bold text-lg">Connect with our</Text>
                    <Text className="mt-2 font-medium text-base">Legal Advisors</Text>
                    <Text className="mt-2 text-center">
                        We, Ilaahi International Law Firm provide Legal Assistance for
                        overseas.
                    </Text>
                    <Button
                        icon="account-voice"
                        className="bg-slate-300 active:bg-slate-800 active:text-white duration-100 my-4 mx-10"
                        onPress={() => router.push("/contact")}
                    >
                        Talk to Lawyer
                    </Button>
                </View>
                <View>
                    <Text className="text-center font-bold text-lg">
                        Experience a smarter:
                    </Text>
                    <Text className="text-center font-semibold text-lg mb-2">
                        legal solution platform in your hand
                    </Text>
                </View>
                <View className="bg-slate-200 rounded-3xl">
                    <View className="bg-white items-center flex flex-col p-4 m-2 rounded-3xl">
                        <Icon name="customerservice" size={50} color="#000000" />
                        <Text className=" font-bold text-lg">Immigration assistance:</Text>
                        <Text className=" justify-evenly text-center">
                            Navigating borders, guiding your journey to new opportunities
                            worldwide.
                        </Text>
                    </View>
                    <View className="bg-white items-center flex flex-col p-4 m-2 rounded-3xl">
                        <Icon1
                            name="file-document-edit-outline"
                            size={50}
                            color="#000000"
                        />
                        <Text className=" font-bold text-lg">Making a Will:</Text>
                        <Text className=" justify-evenly text-center">
                            Planning your legacy, securing your wishes, crafting future
                            assurances.
                        </Text>
                    </View>
                    <View className="bg-white items-center flex flex-col p-4 m-2 rounded-3xl">
                        <Icon1 name="file-document-outline" size={50} color="#000000" />
                        <Text className=" font-bold text-lg ">Legal Documentation:</Text>
                        <Text className=" justify-evenly text-center">
                            Precision in paperwork, clarity in contracts, ensuring legal
                            documentation excellence.
                        </Text>
                    </View>
                    <View className="bg-white items-center flex flex-col p-4 m-2 rounded-3xl">
                        <Icon2 name="laptop-file" size={50} color="#000000" />
                        <Text className=" font-bold text-lg">Intellectual property:</Text>
                        <Text className=" justify-evenly text-center">
                            Protecting creativity, safeguarding innovations, securing your
                            intellectual assets with expertise.
                        </Text>
                    </View>
                    <View className="bg-white items-center flex flex-col p-4 m-2 rounded-3xl">
                        <Icon2 name="gavel" size={50} color="#000000" />
                        <Text className=" font-bold text-lg">Complaince lawyer:</Text>
                        <Text className=" justify-evenly text-center">
                            Ensuring adherence, mitigating risks, navigating legal
                            complexities with strategic guidance.
                        </Text>
                    </View>
                    <View className="bg-white items-center flex flex-col p-4 m-2 rounded-3xl">
                        <Icon2 name="building" size={50} color="#000000" />
                        <Text className=" font-bold text-lg">Estate planning:</Text>
                        <Text className=" justify-evenly text-center">
                            Securing futures, preserving legacies, navigating transitions with
                            comprehensive strategies.
                        </Text>
                    </View>
                </View>
                <View>
                    <Text className="mt-4 text-3xl font-bold text-center">
                        Why choose us
                    </Text>
                    <View className="ml-5 flex flex-row flex-wrap justify-items-center">
                        <View className="flex flex-row items-center space-x-2 mt-3">
                            <Icon name="barchart" size={50} />
                            <Text>Economic</Text>
                        </View>
                        <View className="flex flex-row items-center space-x-2 mt-3 ml-5">
                            <Icon2 name="scale-balanced" size={40} />
                            <Text>Professional</Text>
                        </View>
                        <View className="flex flex-row items-center space-x-2 mt-3">
                            <Icon1 name="police-badge" size={50} />
                            <Text>Security</Text>
                        </View>
                        <View className="flex flex-row items-center space-x-2 mt-3 ml-9">
                            <Icon name="clockcircle" size={45} />
                            <Text>Time</Text>
                        </View>
                    </View>
                    <View className="items-center">
                        <View className="flex flex-row items-center space-x-2 mt-3">
                            <Ionicons name="happy-outline" size={50} />
                            <Text>User satisfaction</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text className="text-center font-bold">We Provide:</Text>
                    <Button
                        icon="account-voice"
                        className="bg-slate-300 active:bg-slate-800 active:text-white duration-100 my-4 mx-10"
                        onPress={() => router.push("/(tabs)/(home)/law/services")}
                    >
                        Services
                    </Button>
                </View>
                <View className="mb-20"></View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Law;
