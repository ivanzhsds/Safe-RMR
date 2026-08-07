import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, riskColors } from '../styles/theme';

export default function AlertCard({ alert, onPress }) {
  const riskColor = riskColors[alert.risco] || colors.muted;
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.top}>
        <Text style={styles.local}>{alert.local}</Text>
        <View style={[styles.badge, { backgroundColor: `${riskColor}18` }]}><Text style={[styles.badgeText, { color: riskColor }]}>{alert.risco}</Text></View>
      </View>
      <Text style={styles.neighborhood}>{alert.bairro}</Text>
      <Text style={styles.description}>{alert.descricao}</Text>
      <Text style={styles.date}>{alert.data}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.surface, borderColor: colors.border, borderRadius: 15, borderWidth: 1, marginBottom: 12, padding: 16 },
  pressed: { opacity: 0.8 },
  top: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
  local: { color: colors.ink, flex: 1, fontSize: 17, fontWeight: '800' },
  neighborhood: { color: colors.teal, fontSize: 13, fontWeight: '700', marginTop: 4 },
  description: { color: colors.muted, fontSize: 14, lineHeight: 20, marginTop: 12 },
  date: { color: '#8A9BAD', fontSize: 12, marginTop: 14 },
  badge: { borderRadius: 8, paddingHorizontal: 10, paddingVertical: 6 },
  badgeText: { fontSize: 12, fontWeight: '800' },
});
