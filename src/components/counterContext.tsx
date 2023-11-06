import {Text, View} from 'react-native';
import React, {useContext} from 'react';
import {RootContext} from '../context/rootContext';

const CounterContextComponent = () => {
  const rootContext: any = useContext(RootContext);

  const {counter, updateCounter} = rootContext;

  return (
    <View>
      <Text>{counter}</Text>
      <Text onPress={() => updateCounter(counter + 1)}>+</Text>
      <Text onPress={() => updateCounter(counter - 1)}>-</Text>
    </View>
  );
};

export default CounterContextComponent;
