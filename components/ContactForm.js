import React, { useEffect, useState } from "react";
import { View, TextInput, Button, ToastAndroid } from "react-native";
import axios from "axios";
// import RNPickerSelect from 'react-native-picker-select';


const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  // const [query, setQuery] = useState("");
  // const [country, setCountry] = useState([]);

  // useEffect(() => {
  //   getCountry();
  // }, [])


  // const getCountry = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.EXPO_PUBLIC_API_URL}/acf/selectcountry`
  //     );
  //     const resp = response.data.map((item) => ({
  //       label: item.acf.country,
  //       value: item.acf.value,
  //     }));
  //     setCountry(resp);
  //   } catch (error) {
  //     // Handle errors
  //     console.error("Error ", error);
  //   }
  // };


  const validation = () => {
    if (!query) {
      ToastAndroid.show("Please select Query Type.", ToastAndroid.SHORT);
    } else if (!name) {
      ToastAndroid.show("Please enter name.", ToastAndroid.SHORT);
    } else if (!email) {
      ToastAndroid.show("Please enter a valid email.", ToastAndroid.SHORT);
    } else if (!phone) {
      ToastAndroid.show("Please enter a valid phone number.", ToastAndroid.SHORT);
    } else if (query && name && email && phone) {
      handleSubmit();
    }
  }


  const handleSubmit = () => {
    // Ensure phone number is a valid number before sending
    const isValidPhone = /^\d+$/.test(phone);
    if (!isValidPhone) {
      ToastAndroid.show(
        "Please enter a valid phone number.",
        ToastAndroid.SHORT
      );
      return;
    }
    const messageData = {
      name: name,
      email: email,
      phone: phone,
      // query_type: query,
      message: message,
    };

    axios
      .post(`${process.env.EXPO_PUBLIC_API_URL}/contact_data`, messageData)
      .then((response) => {
        if (response.status === 200) {
          ToastAndroid.show("Message Sent successfully!", ToastAndroid.SHORT);
          // Clear form fields after successful submission
          // setQuery("")
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        } else {
          ToastAndroid.show("Failed to send message.", ToastAndroid.SHORT);
        }
      })
      .catch((error) => {
        ToastAndroid.show("Failed to send message.", ToastAndroid.SHORT);
      });
  };



  // const convertedArray = country.map(item => {
  //   return {
  //     label: item.label,
  //     value: item.value
  //   };
  // });

  return (
    <View className="max-w-sm border-none  rounded-lg shadow mx-9">
      {/* <View className='mb-2 block  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 '>
        <RNPickerSelect
          onValueChange={setQuery}
          items={country.map(item => {
            return {
              label: item.label,
              value: item.value
            }
          })}
          placeholder={{
            label: 'Select the Country...',
            value: null,
          }}
          value={query}
        />
      </View> */}
      <TextInput
        className="mb-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        className="mb-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="mb-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        className="mb-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        multiline
        numberOfLines={4}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Submit" onPress={validation} />
    </View>
  );
};

export default ContactForm;
