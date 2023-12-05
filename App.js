import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import Login from "./src/components/login";
import Friend_list from "./src/components/friend_list";
import Friend_requests from "./src/components/friend_request";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{
        tabBarActiveTintColor: 'green', 
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: '#000'
        },
        headerStyle: {
          backgroundColor: '#000'
        },
        headerTitleStyle: {
          fontSize: 16,
          color: '#fff',
          fontWeight: 700
        }}}>
        <Tab.Screen name="Friends" component={Friend_list} options={{tabBarIcon: ({focused}) => (<FontAwesome5 name="user-friends" size={24} color={focused ? "green":"grey"} />)}}/>
        <Tab.Screen name="Requests" component={Friend_requests} options={{tabBarIcon: ({focused}) => (<FontAwesome5 name="user-friends" size={24} color={focused ? "green":"grey"} />)}} />
        <Tab.Screen name="Login" component={Login} options={{tabBarIcon: ({focused}) => (<FontAwesome5 name="wechat" size={24} color={focused ? "green":"grey"} />)}} />
      </Tab.Navigator>
    </NavigationContainer>
   
  );
}
