import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import BrandLogo from '../components/BrandLogo';
import Input from '../components/Input';
import { colors, appStyles } from '../styles/theme';

export default function Login({ navigation }) {
  const [form, setForm] = useState({ email: '', senha: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function submit() {
    const next = {};
    if (!form.email.trim()) next.email = 'Informe seu email.';
    if (!form.senha.trim()) next.senha = 'Informe sua senha.';
    setErrors(next);
    if (Object.keys(next).length) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); navigation.replace('Main'); }, 500);
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={appStyles.screen}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <BrandLogo />
        <Text style={appStyles.title}>Olá, vamos cuidar do seu caminho.</Text>
        <Text style={[appStyles.subtitle, styles.intro]}>Monitore a chuva e receba informações de risco perto de você.</Text>
        <View style={styles.form}>
          <Input label="Email" value={form.email} onChangeText={(email) => setForm({ ...form, email })} keyboardType="email-address" autoCapitalize="none" placeholder="voce@email.com" error={errors.email} />
          <Input label="Senha" value={form.senha} onChangeText={(senha) => setForm({ ...form, senha })} secureTextEntry placeholder="Sua senha" error={errors.senha} />
          <Button title="Entrar" onPress={submit} loading={loading} />
          <Button title="Criar uma conta" variant="outline" onPress={() => navigation.navigate('Cadastro')} style={styles.secondaryButton} />
        </View>
        <Text style={styles.note}>Autenticação pronta para receber Supabase Auth.</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  content: { flexGrow: 1, justifyContent: 'center', padding: 24 },
  kicker: { color: colors.teal, fontSize: 12, fontWeight: '900', letterSpacing: 2, marginBottom: 12 },
  intro: { marginTop: 10 },
  form: { marginTop: 32 },
  secondaryButton: { marginTop: 12 },
  note: { color: colors.muted, fontSize: 12, marginTop: 30, textAlign: 'center' },
});