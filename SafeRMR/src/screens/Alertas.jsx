import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AlertCard from '../components/AlertCard';
import Button from '../components/Button';
import Header from '../components/Header';
import { api } from '../services/api';
import { appStyles, colors } from '../styles/theme';

export default function Alertas({ navigation }) {
  const [alerts, setAlerts] = useState([]);
  const load = useCallback(() => { api.getAlerts().then(setAlerts); }, []);
  useFocusEffect(load);
  return <View style={appStyles.screen}><FlatList contentContainerStyle={styles.content} data={alerts} keyExtractor={(item) => item.id} ListHeaderComponent={<><Header eyebrow="Comunidade" title="Alertas" action={<Button title="+ Novo" onPress={() => navigation.navigate('CriarAlerta')} style={styles.newButton} />} /><Text style={styles.description}>Veja relatos recentes de alagamentos e áreas de risco.</Text></>} renderItem={({ item }) => <AlertCard alert={item} />} ListEmptyComponent={<Text style={styles.empty}>Nenhum alerta registrado.</Text>} /></View>;
}
const styles = StyleSheet.create({ content: { padding: 20, paddingBottom: 110 }, newButton: { minHeight: 40, paddingHorizontal: 12 }, description: { color: colors.muted, fontSize: 14, marginBottom: 18, marginTop: -10 }, empty: { color: colors.muted, padding: 30, textAlign: 'center' } });
