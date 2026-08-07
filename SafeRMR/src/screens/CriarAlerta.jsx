import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import { api } from '../services/api';
import { appStyles, colors, riskColors } from '../styles/theme';

export default function CriarAlerta({ navigation }) {
  const [form, setForm] = useState({ local: '', bairro: '', descricao: '', risco: 'Médio' });
  const [errors, setErrors] = useState({});
  function submit() { const next = {}; ['local', 'bairro', 'descricao'].forEach((key) => { if (!form[key].trim()) next[key] = 'Campo obrigatório.'; }); setErrors(next); if (Object.keys(next).length) return; api.createAlert(form).then(() => { Alert.alert('Alerta enviado', 'Obrigado por ajudar sua comunidade.', [{ text: 'OK', onPress: () => navigation.goBack() }]); }); }
  return <ScrollView style={appStyles.screen} contentContainerStyle={styles.content}><Text style={appStyles.title}>Relatar ocorrência</Text><Text style={[appStyles.subtitle, styles.subtitle]}>Compartilhe uma informação importante para quem está por perto.</Text><Input label="Local" value={form.local} onChangeText={(v) => setForm({ ...form, local: v })} error={errors.local} placeholder="Ex.: Av. Norte, 1200" /><Input label="Bairro" value={form.bairro} onChangeText={(v) => setForm({ ...form, bairro: v })} error={errors.bairro} placeholder="Ex.: Encruzilhada" /><Input label="Descrição" value={form.descricao} onChangeText={(v) => setForm({ ...form, descricao: v })} error={errors.descricao} placeholder="Descreva o que está acontecendo" multiline numberOfLines={4} /><Text style={styles.label}>Nível de risco</Text><View style={styles.risks}>{['Baixo', 'Médio', 'Alto'].map((risk) => <Button key={risk} title={risk} variant={form.risco === risk ? 'primary' : 'outline'} onPress={() => setForm({ ...form, risco: risk })} style={[styles.riskButton, form.risco === risk && { backgroundColor: riskColors[risk], borderColor: riskColors[risk] }]} />)}</View><Button title="Enviar alerta" onPress={submit} style={styles.submit} /></ScrollView>;
}
const styles = StyleSheet.create({ content: { padding: 24, paddingBottom: 48 }, subtitle: { marginBottom: 24, marginTop: 8 }, label: { color: colors.ink, fontSize: 13, fontWeight: '700', marginBottom: 8 }, risks: { flexDirection: 'row', gap: 8 }, riskButton: { flex: 1, minHeight: 44, paddingHorizontal: 4 }, submit: { marginTop: 24 } });
