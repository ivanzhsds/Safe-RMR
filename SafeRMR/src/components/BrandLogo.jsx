import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/theme';

export default function BrandLogo({ compact = false, dark = false }) {
  return (
    <View style={styles.row}>
      <View style={[styles.mark, compact && styles.compactMark]}>
        <Image source={require('../../assets/images/icon.png')} style={styles.image} resizeMode="contain" />
      </View>
      <View>
        <Text style={[styles.name, compact && styles.compactName, dark && styles.lightText]}>SAFERMR</Text>
        {!compact ? <Text style={[styles.caption, dark && styles.lightCaption]}>MONITORAMENTO E PROTEÇÃO</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { alignItems: 'center', flexDirection: 'row', gap: 10 },
  mark: { backgroundColor: colors.surface, borderRadius: 13, elevation: 3, height: 52, overflow: 'hidden', shadowColor: colors.navy, shadowOpacity: 0.16, shadowRadius: 7, width: 52 },
  compactMark: { borderRadius: 10, height: 34, width: 34 },
  image: { height: '100%', width: '100%' },
  name: { color: colors.navy, fontSize: 20, fontWeight: '900', letterSpacing: 1.4 },
  compactName: { fontSize: 14, letterSpacing: 1.1 },
  caption: { color: colors.muted, fontSize: 8, fontWeight: '800', letterSpacing: 0.8, marginTop: 2 },
  lightText: { color: colors.surface },
  lightCaption: { color: '#BAE6FD' },
});