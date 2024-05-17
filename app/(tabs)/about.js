import React, { useEffect, useState } from 'react';
import { FAB, Portal, PaperProvider } from 'react-native-paper';
import { Linking } from 'react-native';
import axios from 'axios';

import About from '../../pages/About';

const FloatingActionButton = () => {
  const [state, setState] = useState({ open: false });
  const [floatInfo, setFloatInfo] = useState([]);

  useEffect(() => {
    getFloatInfo();
  }, []);

  const getFloatInfo = async () => {
    try {
      const response = await axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/acf/float-info`
      );
      setFloatInfo(response.data[0].acf);
    } catch (error) {
      console.error("Error fetching post data:", error);
    }
  };

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const handleCall = () => {
    Linking.openURL(`tel: ${floatInfo.phone_number}`);
  };
  const handleCall1 = () => {
    Linking.openURL(`tel: ${floatInfo.phone_number_2}`);
  };
  const handleWhatsapp = () => {
    Linking.openURL(`https://wa.me/${floatInfo.whatsapp}`);
  };
  const handleEmail = () => {
    Linking.openURL(`mailto:${floatInfo.email}`);
  };

  const action = [
    {
      icon: 'whatsapp',
      label: 'Whatsapp',
      onPress: handleWhatsapp,
    },
    {
      icon: 'email',
      label: 'Email',
      onPress: handleEmail,
    },
    {
      icon: 'phone',
      label: 'Call Us',
      onPress: handleCall,
    },
  ]
  const action1 = [
    {
      icon: 'whatsapp',
      label: 'Whatsapp',
      onPress: handleWhatsapp,
    },
    {
      icon: 'email',
      label: 'Email',
      onPress: handleEmail,
    },
    {
      icon: 'phone',
      label: 'Call Us',
      onPress: handleCall,
    },
    {
      icon: 'phone',
      label: 'Call Us',
      onPress: handleCall1,
    },
  ]

  return (
    <PaperProvider>
      <Portal>
        <About />
        <FAB.Group
          open={open}
          visible
          icon={open ? 'close' : 'phone'}
          actions={floatInfo.phone_number_2 ? action1 : action}
          onStateChange={onStateChange}
        />
      </Portal>
    </PaperProvider>
  );
};

export default FloatingActionButton;