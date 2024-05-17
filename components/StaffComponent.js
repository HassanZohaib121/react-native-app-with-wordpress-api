import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import axios from "axios";
import Staff from "./Staff";

const StaffComponent = () => {
  const [staff, setStaff] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/acf/staff`
      );
      const res = response.data.map((item) => ({
        id: item.id,
        name: item.acf.name,
        image: item.acf.image,
        designation: item.acf.designation,
      }));
      setStaff(res);
    } catch (error) {
      console.error("Error fetching post data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex flex-row-reverse flex-wrap-reverse justify-center -mr-8">
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" className='mt-6 justify-center container' />
      ) : (
        staff.map(({ id, image, name, designation }) => {
          return (
            <View className="w-40 p-4" key={id}>
              <Staff
                idi={id}
                image={{ uri: `${image}` }}
                title={name}
                Designation={designation}
              />
            </View>
          );
        })
      )}
    </View>
  );
};

export default StaffComponent;
