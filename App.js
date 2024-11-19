import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import Login from './screens/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <DrawerNavigator />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </NavigationContainer>
  );
};

export default App;
