import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'

const Details = () => {
    const navigation = useNavigation();
    const {itemid} = useLocalSearchParams();

    useEffect(()=>{
        navigation.setOptions({
            title:`Details: ${itemid}`
        })
    },[])
  return (
    <View className="bg-black items-center">
      <Text className='text-white font-bold '>{`Details: ${itemid}`}</Text>
    </View>
  )
}

export default Details