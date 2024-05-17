import axios from "axios";
import { Image } from "expo-image";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View, Text, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import HTMLView from 'react-native-htmlview';


import GoBack from "../../../../../../../components/go-back";


const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";


export default function Page() {
    const [study, setStudy] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getStudy();
    }, [])

    const getStudy = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `${process.env.EXPO_PUBLIC_API_URL}/acf/study/${id}`
            );
            const item = response.data;

            const documents = item.acf.required_documents
            const universities = item.acf.universities

            const title = item.acf.title;
            const country = item.title.rendered;
            const image = item.acf.country;
            const siteName = item.yoast_head_json.og_site_name;
            const description = item.acf.description;

            setStudy({ title, country, image, siteName, description, documents, universities });
        } catch (error) {
            console.error("Error fetching post data:", error);
        } finally {
            setIsLoading(false);
        }
    };
    const { id } = useLocalSearchParams();

    const contact = () => {
        ToastAndroid.show("Failed to send message.", ToastAndroid.SHORT);
    }

    return (
        <SafeAreaView>
            <GoBack text={study.country} />
            <ScrollView>
                {
                    isLoading ? (
                        <View className='container justify-center items-center mt-60'>
                            <ActivityIndicator size="large" color="#0000ff" />
                        </View>
                    ) : (
                        <View className='items-center mb-20'>
                            <Image
                                placeholder={blurhash}
                                source={study.image}
                                className="w-[350px] h-[150px] rounded-lg my-5"
                            />
                            <Text className='font-bold capitalize text-2xl'>{study.title}</Text>
                            <Text className='text-xl uppercase'>{study.siteName}</Text>
                            {study.documents ? (
                                <>
                                    <Text className='text-3xl font-bold mt-3'>Documents</Text>
                                    <View className='mx-3 mt-1 items-center'>
                                        <HTMLView
                                            value={study.documents}
                                        />
                                    </View>
                                </>
                            ) : ("")
                            }
                            {study.universities ? (
                                <>
                                    <Text className='text-3xl font-bold'>Universities</Text>
                                    <View className='mx-3 '>
                                        <HTMLView
                                            value={study.universities}
                                        />
                                    </View>
                                </>
                            ) : ("")
                            }
                            {/* <Text className='mt-5 font-semibold' >{study.description}</Text> */}
                            {study.description ? (
                                <>
                                    <Text className='text-3xl font-bold my-2'>Description</Text>
                                    <View className='mx-3 items-center'>
                                        <HTMLView
                                            value={study.description}
                                        />
                                    </View>
                                </>
                            ) : ("")
                            }
                            <>
                                <Text className='text-3xl font-bold my-2'>For Further Detail</Text>
                                {/* <Link href='../../../../../contact' className='text-xl text-white py-2 px-5 rounded-xl bg-blue-600 font-semibold my-2'>Contact Us</Link> */}
                                <Link href='/Modal' className='text-xl text-white py-2 px-5 rounded-xl bg-blue-600 font-semibold my-2'>Contact Us</Link>
                            </>
                        </View>
                    )
                }
            </ScrollView>
        </SafeAreaView>
    )
};

