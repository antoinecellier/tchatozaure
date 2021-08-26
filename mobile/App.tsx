import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import Bubble from '@tchatozaure/shared/src/components/Bubble'
import MessageInput from '@tchatozaure/shared/src/components/MessageInput'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Bubble content="coucou" />
          <Bubble content="ça va ?" secondary />
          <MessageInput displayButtonLabel={false} onSend={(msg) => console.log(msg)}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
