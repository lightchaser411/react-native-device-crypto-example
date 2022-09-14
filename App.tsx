/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {SafeAreaView} from 'react-native';

import {AsymmetricSigningExample} from './src/Assymetrics';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AsymmetricSigningExample />
    </SafeAreaView>
  );
};

export default App;
