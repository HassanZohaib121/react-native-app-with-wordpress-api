import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import axios from "axios";

// ------------components---------------
import GoBack from "../components/go-back";
import Choose from "../components/Choose";
import University from "../components/University";
import CEOMessage from "../components/CEOMessage";

// --------------Data-------------------
import { choose, trust, consultant } from "../Shared/data";
import Consultant from "../components/Consultant";

const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Consultancy = () => {
    const [university, setUniversity] = useState([]);
    const [certificate, setCertificate] = useState([]);
    const [certificateData, setCertificateData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getUniversity();
        getCertificate();
    }, []);

    // ------------API-----------------
    const getUniversity = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `${process.env.EXPO_PUBLIC_API_URL}/acf/university`
            );
            const res = response.data.map((item) => ({
                id: item.id,
                title: item.title.rendered,
                image: item.acf.image,
            }));
            setUniversity(res);
        } catch (error) {
            console.error("Error fetching post data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const getCertificate = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `${process.env.EXPO_PUBLIC_API_URL}/acf/certificate`
            );
            setCertificateData(response.data[0])
            const res = response.data.map((item) => ({
                id: item.id,
                image: item.acf.image,
            }));
            setCertificate(res);
        } catch (error) {
            console.error("Error fetching post data:", error);
        } finally {
            setIsLoading(false);
        }
    };

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
                        source="https://ilaahi.com/wp-content/uploads/2024/01/two-passports-suitcases-airplane-tickets-wooden-background-banner-copy-space-3d-illustration-scaled-1.jpg"
                        className="w-[350px] h-[200px] ml-1.5 my-2 rounded-xl"
                    />
                </View>
                <Text className="font-bold text-center text-2xl  mb-3">
                    Choose your Visa
                </Text>
                {
                    isLoading ? (
                        <ActivityIndicator size="large" color="#0000ff" className='ml-40' />
                    ) : (
                        consultant.map(({ id, img, title, detail, link }) => {
                            return (
                                <Consultant key={id} image={img} title={title} detail={detail} link={link} />
                            );
                        }))
                }
                <Text className=" font-bold text-2xl text-center mb-2 ">
                    {choose ? "Why Choose Us." : ""}
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        isLoading ? (
                            <ActivityIndicator size="large" color="#0000ff" className='ml-40' />
                        ) : (
                            choose.map(({ id, image, title, detail }) => {
                                return (
                                    <Choose key={id} image={image} title={title} detail={detail} />
                                );
                            })
                        )}
                </ScrollView>
                <Text className=" font-bold text-2xl text-center mb-2 ">
                    {university ? "Universities" : ""}
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View className="flex flex-row mx-2 mb-5">
                        {
                            isLoading ? (
                                <ActivityIndicator size="large" color="#0000ff" className='ml-40' />
                            ) : (
                                university.map(({ id, title, image }) => {
                                    return (
                                        <University
                                            key={id}
                                            img={image}
                                            title={title}
                                            classes={"w-[220px] h-[220px] items-center"}
                                        />
                                    );
                                })
                            )
                        }
                    </View>
                </ScrollView>
                <Text className=" font-bold text-2xl text-center mb-2 ">
                    {certificateData ? "Certificate" : ""}
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View className="flex flex-row mx-2 mb-5">
                        {certificate.map(({ id, image }) => {
                            return (
                                <University
                                    key={id}
                                    image={image}
                                    class={"w-[200px] h-[300px] m-2 items-center"}
                                />
                            );
                        })}
                    </View>
                </ScrollView>
                <Text className=" font-bold text-2xl text-center mb-5 ">
                    Reasons For trusting us.
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        isLoading ? (
                            <ActivityIndicator size="large" color="#0000ff" />
                        ) : (
                            trust.map(({ id, images, title, detail }) => {
                                return (
                                    <Choose key={id} image={images} title={title} detail={detail} />
                                );
                            })
                        )}
                </ScrollView>
                <CEOMessage />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Consultancy;
