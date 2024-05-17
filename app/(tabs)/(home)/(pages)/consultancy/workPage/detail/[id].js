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
    const [work, setWork] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getWork();
    }, [])

    const getWork = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `${process.env.EXPO_PUBLIC_API_URL}/acf/work/${id}`
            );
            const item = response.data;

            const title = item.acf.title;
            const country = item.title.rendered;
            const image = item.acf.image;
            const siteName = item.yoast_head_json.og_site_name;
            const description = item.acf.description;

            const documents = item.acf.required_documents
            const price = item.acf.price

            setWork({ title, country, image, siteName, description, documents, price });

        } catch (error) {
            console.error("Error fetching post data:", error);
        } finally {
            setIsLoading(false);
        }
    };
    const { id } = useLocalSearchParams();

    return (
        <SafeAreaView>
            <GoBack text={work.country} />
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
                                source={work.image}
                                className="w-[350px] h-[150px] rounded-lg my-5"
                            />
                            <Text className='font-bold capitalize text-2xl'>{work.title}</Text>
                            <Text className='text-xl uppercase'>{work.siteName}</Text>
                            {work.documents ? (
                                <>
                                    <Text className='text-2xl font-bold mt-3'>Required Documents</Text>
                                    <View className='mx-3 mt-1 items-center'>
                                        <HTMLView
                                            value={work.documents}
                                            className=' -mb-12'
                                        />
                                    </View>
                                </>
                            ) : ("")
                            }
                            {work.price ? (
                                <View>
                                    <Text className='text-3xl font-bold'>price</Text>
                                    <Text className='mt-2 font-semibold' >{work.price}</Text>
                                </View>
                            ) : ("")
                            }
                            {/* <Text className='mt-5 font-semibold' >{work.description}</Text> */}
                            {work.description ? (
                                <>
                                    <View className='mx-3 items-center'>
                                        <HTMLView
                                            value={work.description}
                                        />
                                    </View>
                                </>
                            ) : ("")
                            }
                            <>
                                <Text className='text-3xl font-bold mb-2 mt-4'>For Further Detail</Text>
                                <Link href='/Modal' className='text-xl text-white py-2 px-5 rounded-xl bg-blue-600 font-semibold my-2'>Contact Us</Link>
                                {/* <Link href='../../../../../contact' className='text-xl text-white py-2 px-5 rounded-xl bg-blue-600 font-semibold my-2'>Contact Us</Link> */}
                            </>
                        </View>
                    )
                }
            </ScrollView>
        </SafeAreaView>
    )
};

