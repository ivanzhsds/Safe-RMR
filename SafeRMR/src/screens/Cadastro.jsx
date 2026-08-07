import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import { api } from '../services/api';
import { appStyles, colors } from '../styles/theme';

const initial = { nome: '', email: '', telefone: '', cpf: '', cep: '', endereco: '', bairro: '', cidade: '', senha: '' };
const required = ['nome', 'email', 'telefone', 'cpf', 'cep', 'endereco', 'bairro', 'cidade', 'senha'];

function mask(value, pattern) {
  const digits = value.replace(/\D/g, '');
  let index = 0;
  return pattern.replace(/#/g, () => digits[index++] || '').replace(/[^\d\s()-]/g, '').replace(/\s+$/g, '');
}

export default function Cadastro({ navigation }) {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [loadingCep, setLoadingCep] = useState(false);

  function update(key, value) { setForm({ ...form, [key]: value }); }
  async function findCep(value) {
    const cep = mask(value, '#####-###');
    update('cep', cep);
    if (cep.length !== 9) return;
    setLoadingCep(true);
    try {
      const address = await api.lookupCep(cep);
      setForm((current) => ({ ...current, cep, endereco: address.logradouro || '', bairro: address.bairro || '', cidade: address.localidade || '' }));
    } catch (error) { Alert.alert('CEP', error.message); }
    finally { setLoadingCep(false); }
  }
  function submit() {
    const next = {};
    required.forEach((key) => { if (!form[key].trim()) next[key] = 'Campo obrigatório.'; });
    if (form.email && !form.email.includes('@')) next.email = 'Informe um email válido.';
    setErrors(next);
    if (Object.keys(next).length) return;
    Alert.alert('Cadastro realizado', 'Sua conta está pronta para acessar o Safe RMR.', [{ text: 'Entrar', onPress: () => navigation.replace('Login') }]);
  }
  return (
    <KeyboardAvoidingView style={appStyles.screen} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={appStyles.title}>Crie sua conta</Text>
        <Text style={[appStyles.subtitle, styles.subtitle]}>Seus dados ajudam a tornar os alertas mais precisos.</Text>
        <Input label="Nome completo" value={form.nome} onChangeText={(v) => update('nome', v)} error={errors.nome} placeholder="Seu nome" />
        <Input label="Email" value={form.email} onChangeText={(v) => update('email', v)} keyboardType="email-address" autoCapitalize="none" error={errors.email} placeholder="voce@email.com" />
        <Input label="Telefone" value={form.telefone} onChangeText={(v) => update('telefone', mask(v, '(##) #####-####'))} keyboardType="phone-pad" error={errors.telefone} placeholder="(81) 99999-9999" />
        <Input label="CPF" value={form.cpf} onChangeText={(v) => update('cpf', mask(v, '###.###.###-##'))} keyboardType="number-pad" error={errors.cpf} placeholder="000.000.000-00" />
        <Input label="CEP" value={form.cep} onChangeText={findCep} keyboardType="number-pad" error={errors.cep} placeholder={loadingCep ? 'Consultando...' : '00000-000'} />
        <Input label="Endereço" value={form.endereco} onChangeText={(v) => update('endereco', v)} error={errors.endereco} placeholder="Rua e número" />
        <Input label="Bairro" value={form.bairro} onChangeText={(v) => update('bairro', v)} error={errors.bairro} placeholder="Seu bairro" />
        <Input label="Cidade" value={form.cidade} onChangeText={(v) => update('cidade', v)} error={errors.cidade} placeholder="Recife" />
        <Input label="Senha" value={form.senha} onChangeText={(v) => update('senha', v)} secureTextEntry error={errors.senha} placeholder="Mínimo de 6 caracteres" />
        <Button title="Criar conta" onPress={submit} style={styles.button} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({ content: { padding: 24, paddingBottom: 48 }, subtitle: { marginBottom: 24, marginTop: 8 }, button: { marginTop: 8 } });
