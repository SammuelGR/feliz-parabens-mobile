import React from 'react';
import { Text, TouchableOpacity, View, Linking } from 'react-native';

import styles from './styles';

const GiftButton = ({ icon, title }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={() => {}}
    style={styles.container}
  >
    <Text style={styles.icon}>{icon}</Text>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default GiftButton;
