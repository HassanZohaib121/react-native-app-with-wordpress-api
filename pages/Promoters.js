import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GoBack from "../components/go-back";
import { Image } from "expo-image";
import axios from "axios";

const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Promoters = () => {
    const [promoter, setPromoter] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        getPromoter();
    }, []);
    const getPromoter = async () => {
        try {
            const result = await axios.get(
                `${process.env.EXPO_PUBLIC_API_URL}/acf/promoters`
            );
            const resp = result.data.map((items) => ({
                id: items.id,
                title: items.acf.title,
                image: items.acf.image,
            }));
            setPromoter(resp);
        } catch (error) {
            console.error("Error fetching post data:", error);
        } finally {
            setIsLoading(false);
        }

    };
    return (
        <SafeAreaView>
            <GoBack text={"Employment Promoters"} />
            <ScrollView>
                <View className="flex flex-row space-x-4 bg-gray-200 p-4 mx-5 rounded-xl shadow-2xl mt-3 justify-center">
                    <Text className="font-bold  items-center text-center">
                        New Ilaahi International Employment Promoters!
                    </Text>
                </View>
                <View className="grid justify-items-center">
                    <Image
                        placeholder={blurhash}
                        source={{
                            uri: "https://ilaahi.com/wp-content/uploads/2024/01/front-view-collection-men-women-with-different-jobs-scaled-1.jpg",
                        }}
                        className="w-[350px] h-[200px] ml-1.5 my-2 rounded-xl"
                    />
                </View>
                <View className="flex flex-col space-y-3 bg-gray-200 p-4 mx-5 rounded-xl shadow-2xl mt-1 justify-center">
                    <Text className="items-center text-center font-semibold">
                        Bridging Talent to Triumph
                    </Text>
                    <Text className="items-center text-center">
                        Your Global Partner in Exceptional Recruitment Services
                    </Text>
                </View>
                <View className="items-center">
                    <View className="flex flex-row flex-wrap justify-start ml-2">
                        {
                            isLoading ? (
                                <ActivityIndicator size="large" color="#0000ff" className='ml-40' />
                            ) : (
                                promoter.map(({ id, image, title }) => {
                                    return (
                                        <View className="w-40 p-4" key={id}>
                                            <View className="rounded-xl bg-white w-[150px] h-[220px] shadow-[0px 20px 30px -10px rgb(38, 57, 77)]">
                                                <View className="mt-2 ml-2">
                                                    <Image
                                                        placeholder={blurhash}
                                                        source={{ uri: image }}
                                                        className="w-[135px] h-[150px] rounded-xl"
                                                    />
                                                </View>
                                                <Text className="mt-3 text-center text-black font-bold">
                                                    {title}
                                                </Text>
                                            </View>
                                        </View>
                                    );
                                })
                            )}
                    </View>
                </View>
                <View className="mb-20"></View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Promoters;
