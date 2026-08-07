import { StyleSheet, Text, View } from 'react-native';
import BrandLogo from './BrandLogo';
import { colors } from '../styles/theme';

export default function Header({ title, eyebrow, action }) {
  return (
    <View style={styles.row}>
      <View style={styles.brand}><BrandLogo compact /></View>
      <View style={styles.copy}>
        {eyebrow ? <Text style={styles.eyebrow}>{eyebrow.toUpperCase()}</Text> : null}
        <Text style={styles.title}>{title}</Text>
      </View>
      {action}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 22 },
  brand: { marginRight: 12 },
  copy: { flex: 1 },
  eyebrow: { color: colors.blue, fontSize: 10, fontWeight: '900', letterSpacing: 1.2, marginBottom: 4 },
  title: { color: colors.ink, fontSize: 23, fontWeight: '900' },
});
