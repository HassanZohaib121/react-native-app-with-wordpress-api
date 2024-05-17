import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import axios from "axios";

import Visa from "../components/Visa";
import GoBack from "../components/go-back";

const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";


const Work = () => {
    const [work, setWork] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getWork();
    }, []);

    const getWork = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `${process.env.EXPO_PUBLIC_API_URL}/acf/work`
            );
            const res = response.data.map((item) => ({
                id: item.id,
                title: item.title.rendered,
                image: item.acf.image,
            }));
            setWork(res);
        } catch (error) {
            console.error("Error fetching post data:", error);
        } finally {
            setIsLoading(false);
        }
    };
    const image = "https://ilaahi.com/wp-content/uploads/2024/04/engineer-construction-uniform-background-generative-ai-scaled.jpg"
    const placeholder = require("../assets/images/2136.jpg")
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
                        // source={require("../assets/images/2136.jpg")}
                        className="w-[350px] h-[200px] ml-1.5 my-2 rounded-xl"
                    />
                </View>
                <Text className="font-bold text-center text-2xl">
                    Choose your destination
                </Text>
                {/* Work visa */}
                <Visa
                    type="Choose from the top Work destinations."
                    detail="At Ilaahi International, we understand the significance of your career aspirations and the impact they have on your life. Navigating the complexities of international employment can be daunting, but with our expert guidance, your journey to work abroad becomes seamless and promising."
                    isLoading={isLoading}
                    page="work"
                    visa={work}
                />
                <View className='mb-20'></View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Work;
