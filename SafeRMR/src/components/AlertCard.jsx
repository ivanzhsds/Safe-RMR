import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, riskColors, riskIcons } from '../styles/theme';

export default function AlertCard({ alert, onPress }) {
  const riskColor = riskColors[alert.risco] || colors.muted;
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.top}>
        <Text style={styles.local}>{alert.local}</Text>
        <View style={[styles.badge, { backgroundColor: `${riskColor}18`, borderColor: riskColor }]}><Text style={[styles.badgeIcon, { color: riskColor }]}>{riskIcons[alert.risco]}</Text><Text style={[styles.badgeText, { color: riskColor }]}>{alert.risco} risco</Text></View>
      </View>
      <Text style={styles.neighborhood}>{alert.bairro}</Text>
      <View style={styles.descriptionRow}><View style={[styles.indicator, { backgroundColor: riskColor }]} /><Text style={styles.description}>{alert.descricao}</Text></View>
      <Text style={styles.date}>{alert.data}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.surface, borderColor: colors.border, borderRadius: 18, borderWidth: 1, elevation: 2, marginBottom: 13, padding: 17, shadowColor: colors.navy, shadowOpacity: 0.06, shadowRadius: 8 },
  pressed: { opacity: 0.8 },
  top: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
  local: { color: colors.ink, flex: 1, fontSize: 17, fontWeight: '900' },
  neighborhood: { color: colors.blue, fontSize: 13, fontWeight: '800', marginTop: 5 },
  descriptionRow: { alignItems: 'center', flexDirection: 'row', marginTop: 14 },
  indicator: { borderRadius: 4, height: 8, marginRight: 9, width: 8 },
  description: { color: colors.muted, flex: 1, fontSize: 14, lineHeight: 20 },
  date: { color: '#8A9BAD', fontSize: 12, marginTop: 14 },
  badge: { alignItems: 'center', borderRadius: 9, borderWidth: 1, flexDirection: 'row', gap: 4, paddingHorizontal: 9, paddingVertical: 6 },
  badgeIcon: { fontSize: 13, fontWeight: '900' },
  badgeText: { fontSize: 11, fontWeight: '900' },
});
