import { ActivityIndicator, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

// ---------------components--------------
import Map from "../../components/map";
import GoBack from "../../components/go-back";

const Offices = () => {
  const [map, setMap] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMap();
  }, []);

  const getMap = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(
        `${process.env.EXPO_PUBLIC_BASE_URL}/acf/office`
      );
      const resp = result.data.map((items) => ({
        id: items.id,
        title: items.acf.title,
        location: items.acf.location,
        locationText: items.acf.locationtext,
        phone1: items.acf.phone1,
        phone1Text: items.acf.phone1text,
        phone2: items.acf.phone2,
        phone2Text: items.acf.phone2text,
        phone3: items.acf.phone3,
        phone3Text: items.acf.phone3text,
      }));
      setMap(resp);
    } catch (error) {
      console.error("Error fetching post data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <GoBack text={"OUR Offices"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {isLoading ? ( // Display ActivityIndicator if loading
          <ActivityIndicator size="large" color="#0000ff" className='items-center container justify-center mt-80' />
        ) : (
          <View className="mb-6">
            {map.map(
              ({
                id,
                title,
                location,
                locationText,
                phone1,
                phone1Text,
                phone2,
                phone2Text,
                phone3,
                phone3Text
              }) => {
                return (
                  <View key={id}>
                    <Map
                      title={title}
                      location={location}
                      locationText={locationText}
                      phone1={phone1}
                      phone1Text={phone1Text}
                      phone2={phone2}
                      phone2Text={phone2Text}
                      phone3={phone3}
                      phone3Text={phone3Text}
                    />
                  </View>
                );
              }
            )}
          </View>
        )}
        <View className="mb-20"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Offices;
