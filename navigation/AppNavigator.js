import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import AddGoal from '../screens/AddGoal';
import GoalsList from '../screens/GoalsList';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//StackNavigator
const GoalsStack = () => {
  return (
    <Stack.Navigator initialRouteName="GoalsList">
      <Stack.Screen name="GoalsList" component={GoalsList} options={{ title: 'GoalsList' }} />
      <Stack.Screen name="AddGoal" component={AddGoal} options={{ title: 'AddGoal' }} />
    </Stack.Navigator>
  );
};

//DrawerNavigator 
const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Drawer.Screen name="Goals" component={GoalsStack} options={{ title: 'GoalsStack' }} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
