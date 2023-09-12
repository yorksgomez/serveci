/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/view/HomeScreen';
import ProfileScreen from '@/view/ProfileScreen';
import LoginScreen from '@/view/LoginScreen';
import RegisterScreen from '@/view/RegisterScreen';
import TravelLogScreen from '@/view/TravelLogScreen';
import LookingTravelScreen from '@/view/LookingTravelScreen';
import DefaultHeaderMenu from '@/view/components/DefaultHeaderMenu';
import LookingDeliveryScreen from '@/view/LookingDeliveryScreen';
import ServiceScreen from '@/view/ServiceScreen';
import LoadingScreen from '@/view/LoadingScreen';
import PublicationScreen from '@/view/PublicationScreen';
import FeedScreen from '@/view/FeedScreen';
import SupportScreen from '@/view/SupportScreen';
import AnswerScreen from '@/view/AnswerScreen';
import InfoScreen from '@/view/InfoScreen';

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  headerStyle: {
    overflow: "visible",
    height: 250
  }
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerStyle: styles.headerStyle,
          headerTransparent: true,
          headerTitle: "",
          headerBackVisible: false,
          headerRight: () => (
            <DefaultHeaderMenu navigation={navigation}>
            </DefaultHeaderMenu>
          )
        })}>
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TravelLog"
          component={TravelLogScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LookingTravel"
          component={LookingTravelScreen}
        />
        <Stack.Screen
          name="LookingDelivery"
          component={LookingDeliveryScreen}
        />
        <Stack.Screen
          name="Service"
          component={ServiceScreen}
        />
        <Stack.Screen
          name="Publication"
          component={PublicationScreen}
        />
        <Stack.Screen
          name="Feed"
          component={FeedScreen}
        />
        <Stack.Screen
          name="Support"
          component={SupportScreen}
        />
        <Stack.Screen
          name="Answer"
          component={AnswerScreen}
        />
        <Stack.Screen
          name="Info"
          component={InfoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
