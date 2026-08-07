import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../styles/theme';

export default function Input({ label, error, ...props }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholderTextColor="#8A9BAD" style={[styles.input, error && styles.inputError]} {...props} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: 16 },
  label: { color: colors.ink, fontSize: 13, fontWeight: '800', marginBottom: 7 },
  input: { backgroundColor: colors.surface, borderColor: colors.border, borderRadius: 13, borderWidth: 1, color: colors.ink, fontSize: 16, minHeight: 54, paddingHorizontal: 15 },
  inputError: { borderColor: colors.red },
  error: { color: colors.red, fontSize: 12, marginTop: 5 },
});
