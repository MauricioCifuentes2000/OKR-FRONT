import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home'; 
import AddGoal from '../screens/AddGoal';
import GoalsList from '../screens/GoalsList';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="AddGoal" component={AddGoal} />
      <Drawer.Screen name="GoalsList" component={GoalsList} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
