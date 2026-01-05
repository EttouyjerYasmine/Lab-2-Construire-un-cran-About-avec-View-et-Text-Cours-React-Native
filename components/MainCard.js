import { StyleSheet, Text, View } from 'react-native';

export default function MainCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Carte Principale</Text>
      <Text style={styles.cardText}>
        Ceci est une carte centrale avec un fond clair. 
        Elle peut contenir du contenu important ou des informations clés de votre application.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F5F5F5',
    padding: 24,
    borderRadius: 12,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#495E57',
    marginBottom: 12,
    textAlign: 'center',
  },
  cardText: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 24,
    textAlign: 'center',
  },
});


