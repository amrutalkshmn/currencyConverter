import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreen from '../screens/HomeScreen';
import Options from '../screens/Options';
import CurrencyList from '../screens/CurrencyList';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
    <MainStack.Navigator >
        <MainStack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
        />
        <MainStack.Screen name="Options" component={Options} />
        <MainStack.Screen
            name="CurrencyList"
            component={CurrencyList}
            options={({ route }) => ({
                title: route.params.title,
                //headerLeft: null,
            })}
        />
    </MainStack.Navigator>
);

export default () => (
    <NavigationContainer>
        <MainStackScreen />
    </NavigationContainer>
)