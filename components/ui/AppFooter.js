import { StyleSheet, Text, View } from 'react-native';

export default function AppFooter() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        All rights reserved, 2025
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3E4A59'
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF'
  }
});