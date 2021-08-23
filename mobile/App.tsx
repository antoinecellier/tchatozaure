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

import {SendButton, Avatar} from '@tchatozaure/shared/src/components';
import * as styles from '@tchatozaure/shared/src/styles';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={stylesComponent.highlight}>Tchatozaure</Text>
          <SendButton />
          <Avatar />
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
