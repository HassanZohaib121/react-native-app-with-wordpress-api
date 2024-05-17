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
    const [visit, setVisit] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getVisit();
    }, [])

    const getVisit = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `${process.env.EXPO_PUBLIC_API_URL}/acf/visit/${id}`
            );
            const item = response.data;

            const documents = item.acf.required_documents
            const time_duration = item.acf.time_duration
            const price = item.acf.price

            const title = item.acf.title;
            const country = item.title.rendered;
            const image = item.acf.country;
            const siteName = item.yoast_head_json.og_site_name;
            const description = item.acf.description;

            setVisit({ title, country, image, siteName, description, documents, time_duration, price });
        } catch (error) {
            console.error("Error fetching post data:", error);
        } finally {
            setIsLoading(false);
        }
    };
    const { id } = useLocalSearchParams();

    return (
        <SafeAreaView>
            <GoBack text={visit.country} />
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
                                source={visit.image}
                                className="w-[350px] h-[150px] rounded-lg my-5"
                            />
                            <Text className='font-bold capitalize text-2xl'>{visit.title}</Text>
                            <Text className='text-xl uppercase'>{visit.siteName}</Text>
                            {visit.documents ? (
                                <>
                                    <Text className='text-3xl font-bold mt-3'>Documents</Text>
                                    <View className='mx-3 mt-1 items-center'>
                                        <HTMLView
                                            value={visit.documents}
                                        />
                                    </View>
                                </>
                            ) : ("")
                            }
                            {visit.time_duration ? (
                                <>
                                    <Text className=' -mt-11 text-2xl font-bold'>Time Duration</Text>
                                    <View className='mx-3 items-center'>
                                        {/* <HTMLView
                                            value={visit.time_duration}
                                            
                                        /> */}
                                        <Text className='text-xl ' >{visit.time_duration}</Text>
                                    </View>
                                </>
                            ) : ("")
                            }
                            {visit.price ? (
                                <>
                                    <Text className='mt-2 text-2xl font-bold'>Price</Text>
                                    <View className='mx-3 items-center'>
                                        <Text className='text-xl ' >{visit.price}</Text>
                                    </View>
                                </>
                            ) : ("")
                            }
                            {/* <Text className='mt-5 font-semibold' >{visit.description}</Text> */}
                            {visit.description ? (
                                <>
                                    <View className='mx-3 items-center'>
                                        <HTMLView
                                            value={visit.description}
                                        />
                                    </View>
                                </>
                            ) : ("")
                            }
                            <>
                                <Text className='text-3xl font-bold my-2'>For Further Detail</Text>
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

