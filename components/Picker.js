import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Picker = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleChange = (value) => {
        setSelectedCountry(value);
    };

    return (
        <View className='mb-2 block  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
            <RNPickerSelect
                onValueChange={handleChange}
                items={[
                    { label: 'UK', value: 'uk' },
                    { label: 'Australia', value: 'australia' },
                    { label: 'Option 3', value: 'option3' },
                ]}
                placeholder={{
                    label: 'Select the Country...',
                    value: null,
                }}
                value={selectedCountry}
            />
        </View>
    );
};

export default Picker;
