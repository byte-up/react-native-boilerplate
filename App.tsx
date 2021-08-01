import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {NativeBaseProvider, extendTheme} from 'native-base';

import MainScreen from './src/screens/main/MainScreen';
import AuthScreen from './src/screens/auth/AuthScreen';
import {RootStackParamList} from './src/screens/RootStackPrams';



import * as sv from './src/i18n/sv.json';
import * as en from './src/i18n/en.json';

const Stack = createStackNavigator<RootStackParamList>();

i18next
  .use({
    type: 'languageDetector',
    async: true,
    detect: (cb: (arg0: string) => any) => cb('en'),
    init: () => {
    },
    cacheUserLanguage: () => {
    },
  })
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: en.translation
      },
      sv: {
        translation: sv.translation
      },
    },
  });

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthScreen}/>
        <Stack.Screen name="Main" component={MainScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
