import React from 'react';
import {View, Text  } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NativeBaseProvider, extendTheme, Button} from 'native-base';

import {RootStackParamList} from '../RootStackPrams';
import ThemeBase from '../../theme/Base';
import ThemeComponents from '../../theme/Components';
import ThemeFonts from '../../theme/Fonts';

type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

function AuthScreen() {
  const navigation = useNavigation<authScreenProp>();
  const theme = extendTheme({
    ThemeBase,
    ThemeComponents,
    ThemeFonts
  });

  return (
    <NativeBaseProvider theme={theme}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Auth Screen</Text>
        <Button onPress={() => navigation.navigate('Main')}>Login</Button>
      </View>
    </NativeBaseProvider>
  );
}

export default AuthScreen;
