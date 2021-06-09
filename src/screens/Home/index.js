import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import GiftButton from '../../components/GiftButton';

import styles from './styles';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#282B5A" barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>FELIZ ANIVERSÁRIO 🥳</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.bodyTitle}>Escolha um presente:</Text>

          <View style={styles.giftList}>
            <GiftButton icon="🤑" title="1 milhão U$" />
            <GiftButton icon="🚗" title="Corsa 2009 completo turbo" />
            <GiftButton icon="🌐" title="Versão Web" />
            <GiftButton icon="📖" title="Textão" />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
