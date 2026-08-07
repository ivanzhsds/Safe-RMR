import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import { api } from '../services/api';
import { appStyles, colors } from '../styles/theme';

export default function Clima() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => { api.getWeather().then(setWeather).catch(() => setError('Não foi possível carregar os dados do clima.')); }, []);
  return <View style={[appStyles.screen, styles.screen]}><Header eyebrow="Atualização agora" title="Clima em Recife" />{error ? <Text style={styles.error}>{error}</Text> : !weather ? <ActivityIndicator color={colors.blue} /> : <View style={styles.grid}>{[['🌡', weather.temperature, 'Temperatura'], ['💧', weather.humidity, 'Umidade'], ['☔', weather.rain, 'Chuva'], ['≋', weather.wind, 'Vento']].map(([icon, value, label]) => <View key={label} style={styles.card}><Text style={styles.icon}>{icon}</Text><Text style={styles.value}>{value}</Text><Text style={styles.label}>{label}</Text></View>)}</View>}<Text style={styles.caption}>Dados preparados para integração com uma API meteorológica.</Text></View>;
}
const styles = StyleSheet.create({ screen: { padding: 20 }, grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 }, card: { backgroundColor: colors.surface, borderColor: colors.border, borderRadius: 16, borderWidth: 1, minHeight: 140, padding: 16, width: '47%' }, icon: { fontSize: 24, marginBottom: 18 }, value: { color: colors.ink, fontSize: 25, fontWeight: '900' }, label: { color: colors.muted, fontSize: 13, marginTop: 4 }, caption: { color: colors.muted, fontSize: 12, lineHeight: 18, marginTop: 24 }, error: { color: colors.red, fontSize: 14, marginTop: 10 } });
