import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import shared from '@tchatozaure/shared';
const {styles, business} = shared;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(business.flatArray());
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={stylesComponent.highlight}>Tchatozaure</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const stylesComponent = StyleSheet.create({
  highlight: {
    fontWeight: '700',
    color: styles.PRIMARY_COLOR,
  },
});

export default App;
