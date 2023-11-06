import React, {useState} from 'react';

export const RootContext = React.createContext({});

const RootContextProvider = (props: any) => {
  const [title, setTiltle] = useState<string>('Giri');

  const [counter, setCounter] = useState<number>(0);

  return (
    <RootContext.Provider
      value={{
        title: title,
        updateTitle: (newTitle: string) => {
          setTiltle(newTitle);
        },
        counter: counter,
        updateCounter: (newValue: number) => setCounter(newValue),
      }}>
      {props.children}
    </RootContext.Provider>
  );
};

export default RootContextProvider;
