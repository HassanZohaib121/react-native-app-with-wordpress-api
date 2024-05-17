import { View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";


import GoBack from "../components/go-back";
import StaffComponent from "../components/StaffComponent";

export default function About() {
    const navigation = useNavigation();
    const router = useRouter();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "About",
        });
    }, []);
    return (
        <SafeAreaView>
            <GoBack text={"About Us"} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="mt-3">
                    <View className="mt-2">
                        <Text className="font-extrabold text-xl text-center">
                            NEW ILAAHI INTERNATIONAL
                        </Text>
                        <Text className="font-extrabold text-md text-center">
                            Employment Promoter
                        </Text>
                        <Text className="font-extrabold text-md text-center">
                            Law Firm
                        </Text>
                        <Text className="font-bold text-center text-xl">&</Text>
                        <Text className="text-center text-xl">
                            ILLAHI Enterprise UK Ltd.
                        </Text>
                    </View>
                    <View className="mt-3">
                        <Text className="font-bold text-center">
                            Your Trusted Partners in Legal Excellence.
                        </Text>
                        <Text className="text-center mt-1">
                            At Ilaahi, we bring together a team of dedicated professionals
                            committed to delivering exceptional legal services across a
                            spectrum of specialties. Explore our comprehensive expertise
                            tailored to meet your diverse legal needs.
                        </Text>
                    </View>
                    <View className="flex flex-col mx-2 mt-4">
                        <View className="mt-3 items-center justify-center">
                            <Text className="font-bold text-center">Trust your future &</Text>
                            <Text className="font-bold text-center">Peaceful life</Text>
                        </View>
                        <View className="mt-3">
                            <Text className="text-center">
                                We take pride in our unwavering commitment to providing
                                unparalleled legal expertise across a spectrum of specialized
                                areas. With a dedicated team of seasoned lawyers, we offer
                                sophisticated legal solutions tailored to meet your individual
                                needs.
                            </Text>
                        </View>
                    </View>
                </View>
                <Text className="font-extrabold text-center text-2xl my-3">
                    Our Team
                </Text>
                <View className="items-center">
                    <StaffComponent />
                </View>
                <View className="mb-20"></View>
            </ScrollView>
        </SafeAreaView>
    );
}
