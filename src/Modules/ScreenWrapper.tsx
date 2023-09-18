import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: string;
};

export const ScreenWrapper = ({
  children,
  style = 'mb-10 bg-green-600',
}: Props) => {
  return (
    <SafeAreaView className={style}>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
};
