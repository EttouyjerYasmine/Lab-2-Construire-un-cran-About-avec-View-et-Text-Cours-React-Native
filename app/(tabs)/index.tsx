import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainCard from '../../components/MainCard';
import AppFooter from '../../components/ui/AppFooter';
import AppHeader from '../../components/ui/AppHeader';

export default function Home() {
  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.content}>
        <MainCard />
      </View>
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02263fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
