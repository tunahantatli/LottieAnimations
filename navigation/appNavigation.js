import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../screens/OnBoarding';
import HomeScreen from '../screens/HomeScreen';
import TakipScreen from '../screens/TakipScreen';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Onboarding'>
                <Stack.Screen name="OnBoarding" options={{ headerShown: false }} component={OnBoarding} />
                <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
                <Stack.Screen name="Takip" options={{ headerShown: false }} component={TakipScreen} />
            </Stack.Navigator>
            <StatusBar barStyle={'light-content'} />
        </NavigationContainer>
    );
}