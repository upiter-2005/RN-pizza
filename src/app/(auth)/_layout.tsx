import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Text} from 'react-native'


import { useColorScheme } from '@/src/components/useColorScheme';
import { Redirect, Stack } from 'expo-router';
import { useAuth } from '@/src/providers/AuthProvider';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

export default function AuthLayout() {
  const {session} = useAuth()

  if(session){
    return <Redirect href="/" />
  }

  return (
    <Stack>
        <Stack.Screen name="sign-in" options={{title: 'Sign in'}} />
        <Stack.Screen name="sign-up" options={{title: 'Sign up'}} />
    </Stack>
    
  );
}
