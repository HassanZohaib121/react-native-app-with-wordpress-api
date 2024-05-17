import { View } from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";

const Starts = ({ star, setStar }) => {
  const [rate, setRate] = useState(0);
  return (
    <>
      <View className="flex flex-row justify-center">
        <IconButton
          icon="star"
          iconColor={
            rate === 1 || rate === 2 || rate === 3 || rate === 4 || rate === 5
              ? "#FFD700"
              : "#000000"
          }
          onPress={() => {
            star === 1 ? setStar(0) : setStar(1);
            rate === 1 ? setRate(0) : setRate(1);
          }}
        />
        <IconButton
          icon="star"
          iconColor={
            rate === 2 || rate === 3 || rate === 4 || rate === 5
              ? "#FFD700"
              : "#000000"
          }
          onPress={() => {
            rate === 2 ? setRate(1) : setRate(2);
            star === 2 ? setStar(1) : setStar(2);
          }}
        />
        <IconButton
          icon="star"
          iconColor={
            rate === 3 || rate === 4 || rate === 5 ? "#FFD700" : "#000000"
          }
          onPress={() => {
            rate === 3 ? setRate(2) : setRate(3);
            star === 3 ? setStar(2) : setStar(3);
          }}
        />
        <IconButton
          icon="star"
          iconColor={rate === 4 || rate === 5 ? "#FFD700" : "#000000"}
          onPress={() => {
            rate === 4 ? setRate(3) : setRate(4);
            star === 4 ? setStar(3) : setStar(4);
          }}
        />
        <IconButton
          icon="star"
          iconColor={rate === 5 ? "#FFD700" : "#000000"}
          onPress={() => {
            rate === 5 ? setRate(4) : setRate(5);
            star === 5 ? setStar(4) : setStar(5);
          }}
        />
      </View>
    </>
  );
};

export default Starts;
