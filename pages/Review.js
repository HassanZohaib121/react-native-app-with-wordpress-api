import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import {
    View,
    TextInput,
    Button,
    ToastAndroid,
    ScrollView,
    Text,
    Switch,
} from "react-native";

// ------------components------------
import GoBack from "../components/go-back";
import DisplayReview from "../components/displayReview";
import Starts from "../components/starts";

const Review = () => {
    const [stars, setStars] = useState(0);
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [verified, setVerified] = useState(0);
    const [refresh, setRefresh] = useState(0);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const validation = () => {
        if (!name) {
            ToastAndroid.show("Please enter name.", ToastAndroid.SHORT);
        } else if (!email) {
            ToastAndroid.show("Please enter a valid email.", ToastAndroid.SHORT);
        } else if (!title) {
            ToastAndroid.show("Please enter the Title.", ToastAndroid.SHORT);
        } else if (!reviewText) {
            ToastAndroid.show("Please enter the Review.", ToastAndroid.SHORT);
        } else if (name && email && title && reviewText) {
            handleSubmitReview();
        }
    }


    const handleSubmitReview = () => {
        isEnabled ? setVerified(1) : setVerified(0)
        const messageData = {
            name: name,
            email: email,
            rating: stars,
            is_verified: verified,
            post_title: title,
            post_content: reviewText,
        };
        axios
            .post(`${process.env.EXPO_PUBLIC_API_URL}/review_data`, messageData)
            .then((response) => {
                if (response.status === 200) {
                    ToastAndroid.show("Review Sent successfully!", ToastAndroid.SHORT);
                    // Clear form fields after successful submission
                    setStars(0);
                    setTitle("")
                    setReviewText("");
                    setName("");
                    setEmail("");
                    setIsEnabled(previousState => !previousState)
                    setRefresh(refresh + 1);
                } else {
                    ToastAndroid.show("Failed to send review.", ToastAndroid.SHORT);
                }
            })
            .catch((error) => {
                ToastAndroid.show("Failed to send review.", ToastAndroid.SHORT);
            });
    };

    return (
        <SafeAreaView>
            <GoBack text={"Reviews & Rating"} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="items-center mt-4">
                    <Text className="font-bold text-xl">Give Us A Review!</Text>
                </View>
                <Starts setStar={setStars} star={stars} />
                <View className="flex flex-col mx-2 mb-3 justify-center items-center">
                    <View className="max-w-sm pt-1 items-center border-gray-200 rounded-lg shadow ">
                        <TextInput
                            className="mb-2 block p-2.5 w-[95vw] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            textAlign="center"
                            placeholder="Summerize your review"
                            value={title}
                            onChangeText={setTitle}
                        />
                        <View className="flex flex-row">
                            <TextInput
                                className="mb-4 block p-2.5 w-[95vw] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                multiline
                                numberOfLines={4}
                                placeholder="Tell people your review"
                                textAlign="center"
                                value={reviewText}
                                onChangeText={setReviewText}
                            />
                        </View>
                        <TextInput
                            className="mb-2 block p-2.5 w-[95vw] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            textAlign="center"
                            placeholder="Name"
                            value={name}
                            onChangeText={setName}
                        />
                        <TextInput
                            className="mb-2 block p-2.5 w-[95vw] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            textAlign="center"
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <View className='flex flex-row m-3'>
                            <Switch trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#81b0ff' : '#f4f3f4'} onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            <View className='flex flex-col'>
                                <Text className=' mr-2'>This review is based on my own</Text>
                                <Text> experience and is my genuine opinion.</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Button title="Submit" onPress={validation} />
                <View className='container justify-center items-center'>
                    <DisplayReview refresh={refresh} setRefresh={setRefresh} />
                </View>
                <View className="mb-20"></View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Review;
