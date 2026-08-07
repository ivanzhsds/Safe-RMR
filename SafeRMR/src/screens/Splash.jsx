import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BrandLogo from '../components/BrandLogo';
import { colors } from '../styles/theme';

export default function Splash({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('Login'), 2200);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <BrandLogo dark />
      <Text style={styles.slogan}>Informação que protege, tecnologia que previne.</Text>
      <Text style={styles.region}>REGIÃO METROPOLITANA DO RECIFE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', backgroundColor: colors.navy, flex: 1, justifyContent: 'center', padding: 28 },
  slogan: { color: '#BAE6FD', fontSize: 15, lineHeight: 23, marginTop: 22, textAlign: 'center' },
  region: { bottom: 34, color: '#8EB3C9', fontSize: 10, fontWeight: '800', letterSpacing: 1.2, position: 'absolute' },
});