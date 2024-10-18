
import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './Styles';

interface BatTextINputProps {
  pass: string;
}

export function PassInput(props: BatTextINputProps) {
  return (
    <TextInput
        placeholder='Senha'
        style={styles.input}
        value={props.pass}
    />
  );
}