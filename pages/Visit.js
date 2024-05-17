import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import axios from "axios";

import Visa from "../components/Visa";
import GoBack from "../components/go-back";

const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";


const Visit = () => {
    const [visit, setVisit] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getVisit();
    }, [])

    const getVisit = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `${process.env.EXPO_PUBLIC_API_URL}/acf/visit`
            );
            const res = response.data.map((item) => ({
                id: item.id,
                title: item.title.rendered,
                image: item.acf.country,
            }));
            setVisit(res);
        } catch (error) {
            console.error("Error fetching post data:", error);
        } finally {
            setIsLoading(false);
        }
    };
    const image = "https://ilaahi.com/wp-content/uploads/2024/04/8615.jpg"
    const placeholder = require("../assets/images/8615.jpg")
    return (
        <SafeAreaView>
            <GoBack text={"Visa Consultancy"} />
            <ScrollView className="mb-16">
                <View className="flex flex-row space-x-4 bg-gray-200 p-4 mx-5 rounded-xl shadow-2xl mt-3 justify-center">
                    <Text className="font-bold items-center text-center">
                        ILAAHI International Visa Consultancy!
                    </Text>
                </View>
                <View className="flex items-center ">
                    <Image
                        placeholder={blurhash}
                        source={image ? image : placeholder}
                        className="w-[350px] h-[200px] ml-1.5 my-2 rounded-xl"
                    />
                </View>
                <Text className="font-bold text-center text-2xl">
                    Choose your destination
                </Text>
                {/* Visit visa */}
                <Visa
                    type="Choose from the top Visit destinations."
                    detail="Explore the World with Ilaahi International. We understand the excitement of discovering new places, reuniting with family, and experiencing diverse cultures. Our visit visa services are designed to make your travel dreams a reality. Whether you are planning a vacation, visiting loved ones, or attending important events, we are here to facilitate your journey."
                    isLoading={isLoading}
                    page="visit"
                    visa={visit}
                />
                <View className='mb-20'></View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Visit;
