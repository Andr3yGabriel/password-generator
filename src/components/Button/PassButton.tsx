import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './Styles';
import { PassInput } from '../PassInput/PassInput';
import generatePass from '../../services/passwordService';

export function PassButton() {
  const [ pass, setPass ] = useState('');

  function handleGenerateButton() {
    let generateToken = generatePass();
    setPass(generateToken);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
        <PassInput pass={pass} />

        <Pressable 
          style={styles.button}
          onPress={handleGenerateButton}
        >
          <Text style={styles.text}>Gerar senha</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={handleCopyButton}
        >
            <Text style={styles.text}>Copiar</Text>
        </Pressable>
    </>
  );
}