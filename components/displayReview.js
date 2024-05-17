import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const DisplayReview = ({ refresh, setRefresh }) => {
  const [review, setReview] = useState([]);
  const [reviewData, setReviewData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    submitReview();
  }, [refresh]);

  const submitReview = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/show-review-data`
      );
      setReviewData(response.data[0])
      const res = response.data.map((item) => ({
        id: item.id,
        name: item.name,
        post_title: item.post_title,
        post_content: item.post_content,
        rating: item.rating,
        is_verified: item.is_verified,
      }));
      setReview(res);
    } catch (error) {
      console.error("Error fetching post data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="mt-3">
      <Text className='font-bold text-2xl text-center my-4'>
        {reviewData ? "Reviews" : ""}
      </Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        review.map(({ id, name, post_title, post_content, rating, is_verified }) => {
          return (
            <View key={id} className="mx-5 bg-[#b09393] rounded-lg my-2 p-4">
              <Text className="font-bold bg-white rounded-lg pl-5 py-2 mb-2">
                {name}
              </Text>
              <Text className="font-bold bg-white rounded-lg pl-5 py-2 mb-2">
                {post_title}
              </Text>
              <View className="flex flex-row items-center space-x-3">
                {is_verified ? (
                  <View className="bg-white rounded-full">
                    <Ionicons name="checkmark-circle" color="#008000" size={24} />
                  </View>
                ) : (
                  <View className="bg-white rounded-full">
                    <Ionicons name="close-circle" color="#c80000" size={24} />
                  </View>
                )}
                <View className="flex flex-row">
                  {Array.from({ length: parseInt(rating) }).map((_, index) => (
                    <Ionicons key={index} name="star" color="#FFD700" size={24} />
                  ))}
                </View>
              </View>
              <Text className="bg-white rounded-xl p-3 mt-2 justify-evenly">
                {post_content}
              </Text>
            </View>
          );
        })
      )}
    </View>
  );
};

export default DisplayReview;