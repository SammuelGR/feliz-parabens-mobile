import React from 'react';
import { Alert, Text, TouchableOpacity, Linking } from 'react-native';

import styles from './styles';

const GiftButton = ({ icon, title, onPress }) => {
  const handlePress = () => {
    switch (onPress) {
      case 'fake':
        return Alert.alert(
          'Ocorreu algum erro',
          'Tente novamente mais tarde. 😳',
        );
      case 'web':
        return Linking.openURL('https://sammuelgr.github.io/feliz-parabens/');
      case 'gift':
        return Alert.alert(
          'Parabéns!!! 🤩',
          'Para receber seu presente me chame no WhatsApp com a senha: meconteaverdade',
        );
      default:
        return Alert.alert(
          'Ocorreu algum erro',
          'Tente novamente mais tarde. 😳',
        );
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      style={styles.container}
    >
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GiftButton;
