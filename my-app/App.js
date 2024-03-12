import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from './componentes/login';
import OpcaoCal from './componentes/cal';
import AgeScreen from './componentes/idade';
import InterestScreen from './componentes/juros';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginForm}
          options={{ title: 'Bem-vindo' }}
        />
        <Stack.Screen
          name="OpcaoCal"
          component={OpcaoCal}
          options={{ title: 'Escolha uma opção' }}
        />
        <Stack.Screen
          name="AgeScreen"
          component={AgeScreen}
          options={{ title: 'Idade' }}
        />
        <Stack.Screen
          name="InterestScreen"
          component={InterestScreen}
          options={{ title: 'Juros' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}