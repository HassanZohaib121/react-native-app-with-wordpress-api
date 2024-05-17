import { View, Text, TextInput, Button, ToastAndroid } from "react-native";
import { IconButton } from "react-native-paper";
import React, { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(true);
  return (
    <View className="flex flex-col mx-2mb-3">
      <View className="max-w-sm items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Text className="font-bold text-2xl text-center mb-2">Login</Text>
        <TextInput
          className="mb-2 block p-2.5 w-[95vw] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Username"
        />
        <TextInput
          className="mb-2 block p-2.5 w-[95vw] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email"
        />
        <View className="flex flex-row">
          <TextInput
            className="mb-4 block p-2.5 w-[80vw] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            secureTextEntry={show ? true : false}
            placeholder="Password"
          />
          <IconButton
            icon={show ? "eye" : "eye-off"}
            onPress={() => {
              setShow(!show);
            }}
          />
        </View>
      </View>
      <Button
        title="Login"
        onPress={() => {
          ToastAndroid.show("Login successfully!", ToastAndroid.SHORT);
        }}
      />
    </View>
  );
};

export default Login;
