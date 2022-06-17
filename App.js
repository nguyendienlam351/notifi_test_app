import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import UserScreen from './src/screens/UserScreen';
import { requestUserPermission, notificationListener } from './src/utils/notification'

const Tab = createBottomTabNavigator();

const App = () => {
  const navigation = useRef();

  useEffect(() => {
    requestUserPermission()
    notificationListener(navigation)
  }, [])

  return (
    <NavigationContainer ref={navigation}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: "beside-icon",
          tabBarLabelStyle: {
            fontWeight: "700",
            fontSize: 15
          },
          tabBarIconStyle: { display: "none" },
        }}>
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="settings" component={SettingsScreen} />
        <Tab.Screen name="user" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App