import { Stack } from 'expo-router'
import React from 'react'

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='(pages)' options={{ headerShown: false, presentation: 'modal' }} />
      <Stack.Screen name='Modal' options={{ headerShown: false, presentation: 'modal' }} />
    </Stack>
  )
}

export default Layout