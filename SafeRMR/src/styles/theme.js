import { StyleSheet } from 'react-native';

export const colors = {
  navy: '#102A43',
  blue: '#1976D2',
  sky: '#E8F4FC',
  teal: '#159A9C',
  green: '#2E9B64',
  amber: '#D88716',
  red: '#C94343',
  ink: '#172B4D',
  muted: '#61758A',
  border: '#D6E2EC',
  surface: '#FFFFFF',
  background: '#F4F8FB',
};

export const appStyles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 110 },
  title: { color: colors.ink, fontSize: 28, fontWeight: '800' },
  subtitle: { color: colors.muted, fontSize: 14, lineHeight: 21 },
  sectionTitle: { color: colors.ink, fontSize: 18, fontWeight: '800', marginBottom: 12 },
  card: { backgroundColor: colors.surface, borderRadius: 16, borderWidth: 1, borderColor: colors.border, padding: 16 },
});

export const riskColors = { Baixo: colors.green, Médio: colors.amber, Alto: colors.red };
