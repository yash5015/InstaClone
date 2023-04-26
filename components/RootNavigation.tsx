import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeMain from './HomeMain';
import Chats from './chats/Chats';
import FooterNavigation from './FooterNavigation';
const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="FooterNavigation" component={FooterNavigation} />
        <Stack.Screen name="HomeMain" component={HomeMain} />
        <Stack.Screen name="Chats" component={Chats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
