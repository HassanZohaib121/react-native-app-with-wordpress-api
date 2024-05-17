import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

// ---------components-----------
import Choose from "../components/Choose";
import GoBack from "../components/go-back";

const Services = () => {
    const [lawyer, setLawyer] = useState([]);
    const [servise, setServise] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getLawyer();
        getServise();
    }, []);

    const getLawyer = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `${process.env.EXPO_PUBLIC_API_URL}/acf/lawyers`
            );
            const res = response.data.map((item) => ({
                id: item.id,
                detail: item.acf.detail,
                expert: item.acf.expert,
                name: item.acf.name,
                image: item.acf.image,
            }));
            setLawyer(res);
        } catch (error) {
            console.error("Error fetching post data:", error);
        } finally {
            setIsLoading(false);
        }
    };
    const getServise = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `${process.env.EXPO_PUBLIC_API_URL}/acf/services`
            );
            const resp = response.data.map((item) => ({
                id: item.id,
                title: item.acf.title,
                detail: item.acf.detail,
                image: item.acf.image,
            }));
            setServise(resp);
        } catch (error) {
            console.error("Error fetching post data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView>
            <GoBack text={"Our Services"} />
            <ScrollView className="pt-1">
                <View className="items-center">
                    <View className="items-center my-4">
                        <Text className="text-2xl font-medium">Trust your future &</Text>
                        <Text className="text-3xl font-bold">Peaceful life</Text>
                        <Text className="text-2xl font-medium">
                            illahi Enterprise UK Ltd.
                        </Text>
                    </View>
                    <ScrollView horizontal>
                        <View className='flex flex-row'>
                            {isLoading ? (
                                <ActivityIndicator size="large" color="#0000ff" />
                            ) : (
                                servise.map(({ id, image, title, detail }) => {
                                    return (
                                        <View key={id} className='flex flex-row'>
                                            <Choose
                                                image={{ uri: `${image}` }}
                                                title={title}
                                                detail={detail}
                                            />
                                        </View>
                                    );
                                })
                            )}
                        </View>
                    </ScrollView>
                </View>
                <View className="items-center">
                    <Text className="text-3xl font-bold text-center mb-3">
                        Our Expert Lawyers
                    </Text>
                    <View className='flex flex-col-reverse'>
                        {isLoading ? (
                            <ActivityIndicator size="large" color="#0000ff" />
                        ) : (
                            lawyer.map(({ id, image, name, detail, expert }) => {
                                return (
                                    <View key={id}>
                                        <Choose
                                            image={{ uri: `${image}` }}
                                            title={name}
                                            detail={detail}
                                            expert={expert}
                                        />
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

export default Services;
