import { useEffect, useLayoutEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

// ----Components-----
import TopSlider from "../components/TopSlider";
import Card from "../components/Card";
// import SearchBar from "../components/SearchBar";
import TopBar from "../components/LogoBar";

export default function Home() {
    const [images, setImages] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        getImages();
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Home",
        });
    }, []);

    const getImages = async () => {
        try {
            const response = await axios.get(
                `${process.env.EXPO_PUBLIC_API_URL}/acf/slider`
            );
            const resp = response.data.map((item) => ({
                id: item.id,
                title: item.acf.title,
                image: item.acf.image,
            }));

            setImages(resp);
        } catch (error) {
            // Handle errors
            console.error("Error fetching Image:", error);
        }
    };

    return (
        <SafeAreaView>
            <ScrollView
                className="my-3 flex flex-col"
                showsVerticalScrollIndicator={false}
            >
                <TopBar />
                <View className="mb-2">
                    {/* <SearchBar /> */}
                </View>
                <View>
                    <TopSlider images={images} />
                </View>
                <ScrollView
                    horizontal
                    className="my-3 mx-3 flex flex-row"
                    showsHorizontalScrollIndicator={false}
                >
                    <View className="mr-3">
                        <Card
                            title="Law Firm"
                            detail="Ilaahi International Law Firm"
                            link="/(pages)/law"
                            image={{
                                uri: `https://ilaahi.com/wp-content/uploads/2024/01/28687-scaled-1.jpg`,
                            }}
                        />
                    </View>
                    <Card
                        title="Import Export"
                        detail="Ilaahi International Import export"
                        image={{
                            uri: `https://ilaahi.com/wp-content/uploads/2024/01/transport-logistic-manager-engineer-checking-generative-ai-illustration-scaled-1.jpg`,
                        }}
                        link="/(pages)/import"
                    />
                </ScrollView>
                <ScrollView
                    horizontal
                    className="my-3 mx-3 flex flex-row"
                    showsHorizontalScrollIndicator={false}
                >
                    <View className="mr-3">
                        <Card
                            title="Visa Consultancy"
                            detail="Ilaahi International Visa Consultancy"
                            image={{
                                uri: `https://ilaahi.com/wp-content/uploads/2024/01/1602.m00.i125.n038.P.c25.323775368-Visa-stamping.-Visa-stamp-on-Passport-or-visa-application-scaled-1.jpg`,
                            }}
                            link="/(pages)/consultancy"
                        />
                    </View>
                    <Card
                        title="Employment Pro..."
                        detail="Ilaahi International Employment promoter."
                        link="/(pages)/promoters"
                        image={{
                            uri: `https://ilaahi.com/wp-content/uploads/2024/01/hero-construction-site-construction-worker-s-helmet-generative-ai-scaled-1.jpg`,
                        }}
                    />
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
}
