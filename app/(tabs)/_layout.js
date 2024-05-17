import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#b09393",
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} className="mr-10" />
          ),
        }}
      />

      <Tabs.Screen
        name="contact"
        options={{
          tabBarLabel: "Contact Us",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mail" size={size} color={color} className="mr-10" />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarLabel: "About Us",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="information-circle"
              size={size}
              color={color}
              className="mr-10"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="review"
        options={{
          tabBarLabel: "Review",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} className="mr-10" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
