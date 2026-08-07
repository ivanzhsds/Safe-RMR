import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/theme';

export default function Splash({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('Login'), 2200);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logo}><Text style={styles.logoText}>SR</Text></View>
      <Text style={styles.name}>Safe RMR</Text>
      <Text style={styles.slogan}>Informação que protege, tecnologia que previne.</Text>
      <Text style={styles.region}>REGIÃO METROPOLITANA DO RECIFE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', backgroundColor: colors.navy, flex: 1, justifyContent: 'center', padding: 28 },
  logo: { alignItems: 'center', backgroundColor: colors.teal, borderRadius: 26, height: 92, justifyContent: 'center', marginBottom: 22, transform: [{ rotate: '-8deg' }], width: 92 },
  logoText: { color: colors.surface, fontSize: 38, fontWeight: '900', transform: [{ rotate: '8deg' }] },
  name: { color: colors.surface, fontSize: 38, fontWeight: '900' },
  slogan: { color: '#C8DCEB', fontSize: 15, lineHeight: 23, marginTop: 10, textAlign: 'center' },
  region: { bottom: 34, color: '#8EB3C9', fontSize: 10, fontWeight: '800', letterSpacing: 1.2, position: 'absolute' },
});