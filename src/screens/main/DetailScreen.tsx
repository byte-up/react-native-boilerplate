import React from 'react';
import {View, Text} from 'react-native';
import { useTranslation } from 'react-i18next';

function DetailScreen() {
  const { t } = useTranslation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{t('hello')}</Text>
    </View>
  );
}
export default DetailScreen;
