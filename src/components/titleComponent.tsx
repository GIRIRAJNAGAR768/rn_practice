import {Text, View} from 'react-native';
import React, {useContext} from 'react';
import {RootContext} from '../context/rootContext';

export const TitleComponent = () => {
  const rootContext: any = useContext(RootContext);

  const {title, updateTitle} = rootContext;

  return (
    <View>
      <Text
        onPress={() => {
          updateTitle(title === 'Giri' ? 'Giri Updated' : 'Giri');
        }}>
        {title}
      </Text>
    </View>
  );
};
