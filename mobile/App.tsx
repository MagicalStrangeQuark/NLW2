import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import AppStack from './src/routes/AppStack';

export default function App() {
  const [isReady, setReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={_loadAssets}
        onFinish={() => setReady(true)}
        onError={e => console.error(e)}
      />
    );
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}

const _loadAssets = async () => {
  await Font.loadAsync({
    'Archivo_400Regular': require('./node_modules/@expo-google-fonts/archivo/Archivo_400Regular.ttf'),
    'Archivo_700Bold': require('./node_modules/@expo-google-fonts/archivo/Archivo_700Bold.ttf'),
    'Poppins_400Regular': require('./node_modules/@expo-google-fonts/poppins/Poppins_400Regular.ttf'),
    'Poppins_600SemiBold': require('./node_modules/@expo-google-fonts/poppins/Poppins_600SemiBold.ttf')
  });
}