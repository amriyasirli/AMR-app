import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLOR from '../style/colors'
import { Home, Scan, Profil, Depo, Detail, Ambil } from '../screens'


const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
      <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'grid'
                  : 'grid-outline';
              } else if (route.name === 'Scan') {
                iconName = focused ? 'scan' : 'scan-outline';
              } else if (route.name === 'Profil') {
                iconName = focused ? 'person' : 'person-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: COLOR.primary,
            tabBarInactiveTintColor: COLOR.dark,
          })}

        >
          <Tab.Screen name="Home" component={Home} options={{ 
                headerShown : false
            }} />
          <Tab.Screen name="Scan" component={Scan} options={{ 
                headerShown : false
            }} />
          <Tab.Screen name="Profil" component={Profil} options={{ 
                headerShown : false
            }} />
      </Tab.Navigator>
    )
  }

const Stack = createNativeStackNavigator();


export default function Router() {
    return (
          <Stack.Navigator initialRouteName="MainApp">
            <Stack.Screen name="Depo" component={Depo} options={{ 
                headerShown : false
            }} />
            <Stack.Screen name="Detail" component={Detail} options={{ 
                headerShown : false
            }} />
            <Stack.Screen name="Ambil" component={Ambil} options={{ 
                headerShown : false
            }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ 
                headerShown : false
            }} />
          </Stack.Navigator>
    );
  }

const styles = StyleSheet.create({})