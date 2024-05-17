import { Image } from "expo-image";
import { Link, router } from "expo-router";
import { View, Text, Pressable } from "react-native";

const Consultant = ({ image, title, detail, link }) => {
    return (
        <Pressable onPress={() => router.push(link)}>
            <View className="flex flex-col items-center mx-4 mb-2 bg-white border-[1px] border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 shadow-2xl">
                <Image className="object-cover w-[326px] rounded-t-lg h-[150px] md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" source={image} />
                <View className="flex flex-col justify-between p-4 leading-normal">
                    <Text className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 ">{title}</Text>
                    <Text className="mb-3 font-normal text-justify text-gray-700 ">{detail}</Text>
                </View>
                <View className='justify-center mb-3'>
                    <Link
                        href={link}
                        className="inline-flex px-28 py-2 mb-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        Learn more
                    </Link>
                </View>
            </View>
        </Pressable>
    )
}

export default Consultant;

