import { StyleSheet } from 'react-native';

export const colors = {
  navy: '#0F172A',
  navySoft: '#1E293B',
  blue: '#0284C7',
  sky: '#E0F2FE',
  cyan: '#38BDF8',
  teal: '#0284C7',
  green: '#10B981',
  amber: '#F59E0B',
  red: '#EF4444',
  redDark: '#DC2626',
  ink: '#0F172A',
  muted: '#475569',
  border: '#E2E8F0',
  surface: '#FFFFFF',
  background: '#F8FAFC',
};

export const appStyles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 112 },
  title: { color: colors.ink, fontSize: 28, fontWeight: '900', letterSpacing: -0.4 },
  subtitle: { color: colors.muted, fontSize: 14, lineHeight: 21 },
  sectionTitle: { color: colors.ink, fontSize: 18, fontWeight: '900', marginBottom: 12 },
  card: { backgroundColor: colors.surface, borderColor: colors.border, borderRadius: 18, borderWidth: 1, elevation: 2, padding: 16, shadowColor: colors.navy, shadowOffset: { height: 3, width: 0 }, shadowOpacity: 0.06, shadowRadius: 8 },
});

export const riskColors = { Baixo: colors.green, Médio: colors.amber, Alto: colors.red };
export const riskIcons = { Baixo: '✓', Médio: '!', Alto: '×' };
