import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RootContextProvider from './context/rootContext';
import {TitleComponent} from './components';
// import CounterContextComponent from './components/counterContext';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import CounterReduxComponent from './components/counterRedux';
import codePush from 'react-native-code-push';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.app}>
      <Provider store={store}>
        <RootContextProvider>
          <TitleComponent />
          {/* <CounterContextComponent /> */}
          <CounterReduxComponent />
        </RootContextProvider>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
