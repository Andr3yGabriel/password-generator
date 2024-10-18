import React from 'react';
import { View, Image } from 'react-native';
import Locker from '../../assets/Locker.png';

export function Logo() {
  return (
    <View>
        <Image source={Locker}/>
    </View>
  );
}