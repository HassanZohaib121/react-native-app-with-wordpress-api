import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { Image } from "expo-image";

// ------------components----------
import GoBack from "../components/go-back";
import Choose from "../components/Choose";

const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Import = () => {
    const [importex, setImportex] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        getImportex();
    }, []);

    const getImportex = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `${process.env.EXPO_PUBLIC_API_URL}/acf/Import`
            );
            const res = response.data.map((item) => ({
                id: item.id,
                detail: item.acf.detail,
                title: item.acf.title,
                image: item.acf.image,
            }));
            setImportex(res);
        } catch (error) {
            console.error("Error fetching post data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (!importex) {
        return null; // Render nothing if there are no images
    }

    return (
        <SafeAreaView>
            <GoBack text={"Import & Export"} />
            <ScrollView>
                <View
                    className="flex flex-row space-x-4 bg-gray-200 p-4 mx-5
          rounded-xl shadow-2xl mt-3 justify-center"
                >
                    <Text className="font-bold  items-center text-center">
                        New Ilaahi International Import and Export!
                    </Text>
                </View>
                <View className="flex items-center">
                    <Image
                        placeholder={blurhash}
                        source={{
                            uri: `https://ilaahi.com/wp-content/uploads/2024/01/transport-logistic-manager-engineer-checking-generative-ai-illustration-scaled-1.jpg`,
                        }}
                        className="w-[350px] h-[200px] ml-1.5 my-2 rounded-xl flex justify-center"
                    />
                </View>
                <View
                    className="flex flex-row space-x-4 p-4 mx-5
          rounded-xl shadow-2xl justify-center"
                >
                    <Text className="font-bold text-xl items-center text-center">
                        Why Choose Us:
                    </Text>
                </View>
                <ScrollView horizontal>
                    <View className="flex flex-row-reverse items-center mt-3 mb-10">
                        {
                            isLoading ? (
                                <ActivityIndicator size="large" color="#0000ff" className='ml-40 mt-16' />
                            ) : (
                                importex.map(({ id, image, title, detail }) => {
                                    return (
                                        <View key={id}>
                                            <Choose image={{ uri: image }} title={title} detail={detail} />
                                        </View>
                                    );
                                })
                            )}
                    </View>
                </ScrollView>
                <View className="mb-20"></View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Import;
