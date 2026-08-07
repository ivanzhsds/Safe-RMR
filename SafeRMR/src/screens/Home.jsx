import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import { api } from '../services/api';
import { appStyles, colors } from '../styles/theme';

export default function Home({ navigation }) {
  const [weather, setWeather] = useState(null);
  useEffect(() => { api.getWeather().then(setWeather); }, []);
  return (
    <ScrollView style={appStyles.screen} contentContainerStyle={appStyles.content}>
      <Header eyebrow="Bom dia" title="Olá, morador" action={<Text style={styles.avatar}>MR</Text>} />
      <View style={styles.weatherCard}>
        <View><Text style={styles.weatherLabel}>Agora em Recife</Text><Text style={styles.temperature}>{weather?.temperature || '--'}</Text><Text style={styles.weatherText}>Chuva moderada nas próximas horas</Text></View>
        <View style={styles.weatherIcon}><Text style={styles.cloud}>☔</Text></View>
      </View>
      <View style={styles.sectionHeader}><Text style={appStyles.sectionTitle}>Mapa de risco</Text><Text style={styles.live}>● AO VIVO</Text></View>
      <View style={styles.map}><View style={[styles.pin, styles.pinOne]} /><View style={[styles.pin, styles.pinTwo]} /><View style={[styles.pin, styles.pinThree]} /><Text style={styles.mapTitle}>Região Metropolitana do Recife</Text><Text style={styles.mapHint}>Pontos de alagamento recentes</Text></View>
      <Pressable style={styles.climateLink} onPress={() => navigation.navigate('Clima')}><Text style={styles.climateIcon}>☔</Text><View style={styles.climateCopy}><Text style={styles.linkTitle}>Ver detalhes do clima</Text><Text style={styles.linkText}>Umidade, chuva e vento em tempo real</Text></View><Text style={styles.arrow}>›</Text></Pressable>
    </ScrollView>
  );
}
const styles = StyleSheet.create({ avatar: { alignItems: 'center', backgroundColor: colors.sky, borderRadius: 22, color: colors.blue, fontWeight: '900', paddingTop: 12, textAlign: 'center', height: 44, width: 44 }, weatherCard: { alignItems: 'center', backgroundColor: colors.navy, borderRadius: 20, elevation: 4, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 28, padding: 20, shadowColor: colors.navy, shadowOpacity: 0.2, shadowRadius: 10 }, weatherLabel: { color: '#BAE6FD', fontSize: 13, fontWeight: '800' }, temperature: { color: colors.surface, fontSize: 42, fontWeight: '900', marginTop: 2 }, weatherText: { color: '#E0F2FE', fontSize: 12, marginTop: 2 }, weatherIcon: { alignItems: 'center', backgroundColor: colors.navySoft, borderRadius: 35, height: 70, justifyContent: 'center', width: 70 }, cloud: { color: colors.cyan, fontSize: 34 }, sectionHeader: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }, live: { color: colors.red, fontSize: 10, fontWeight: '900', marginBottom: 12 }, map: { backgroundColor: '#D8EBDD', borderColor: '#A7CDB3', borderRadius: 20, borderWidth: 1, height: 250, overflow: 'hidden', position: 'relative' }, mapTitle: { bottom: 21, color: colors.navy, fontSize: 15, fontWeight: '900', left: 18, position: 'absolute' }, mapHint: { bottom: 6, color: colors.muted, fontSize: 11, left: 18, position: 'absolute' }, pin: { backgroundColor: colors.red, borderColor: '#FFFFFF', borderRadius: 12, borderWidth: 3, elevation: 2, height: 18, position: 'absolute', shadowColor: colors.red, shadowOpacity: 0.35, shadowRadius: 5, width: 18 }, pinOne: { left: '27%', top: '30%' }, pinTwo: { left: '60%', top: '48%' }, pinThree: { left: '43%', top: '65%' }, climateLink: { alignItems: 'center', backgroundColor: colors.surface, borderColor: colors.border, borderRadius: 17, borderWidth: 1, elevation: 2, flexDirection: 'row', marginTop: 16, padding: 15, shadowColor: colors.navy, shadowOpacity: 0.06, shadowRadius: 7 }, climateIcon: { fontSize: 25, marginRight: 13 }, climateCopy: { flex: 1 }, linkTitle: { color: colors.ink, fontSize: 15, fontWeight: '900' }, linkText: { color: colors.muted, fontSize: 12, marginTop: 3 }, arrow: { color: colors.blue, fontSize: 27 } });
