import {Text, View} from 'react-native';
import React from 'react';
import {decrement, fetchTodosAction, increment} from '../redux/slices';
import {useDispatch, useSelector} from 'react-redux';

const CounterReduxComponent = () => {
  const counterReducer = useSelector((data: any) => data.counterReducer);
  const todoReducer = useSelector((data: any) => data.todoReducer);
  const dispatch = useDispatch();

  console.log(todoReducer);

  return (
    <View>
      <Text>{counterReducer.counter}</Text>
      <Text onPress={() => dispatch(increment())}>+</Text>
      <Text onPress={() => dispatch(decrement())}>-</Text>

      <Text
        onPress={() => {
          dispatch(fetchTodosAction())
            .unwrap()
            .then((res: any) => {
              console.log('ressss', res);
            })
            .catch((error: any) => {
              console.log(error);
            });
        }}>
        Call TODO API
      </Text>
    </View>
  );
};

export default CounterReduxComponent;
