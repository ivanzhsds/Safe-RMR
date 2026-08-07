import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../styles/theme';

export default function Button({ title, onPress, variant = 'primary', loading = false, style }) {
  return (
    <Pressable accessibilityRole="button" disabled={loading} onPress={onPress} style={({ pressed }) => [styles.base, styles[variant], pressed && styles.pressed, style]}>
      {loading ? <ActivityIndicator color={variant === 'outline' ? colors.blue : colors.surface} /> : <Text style={[styles.text, variant === 'outline' && styles.outlineText]}>{title}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: { minHeight: 52, borderRadius: 12, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 18 },
  primary: { backgroundColor: colors.blue },
  secondary: { backgroundColor: colors.teal },
  outline: { borderWidth: 1, borderColor: colors.blue, backgroundColor: 'transparent' },
  danger: { backgroundColor: colors.red },
  text: { color: colors.surface, fontSize: 16, fontWeight: '800' },
  outlineText: { color: colors.blue },
  pressed: { opacity: 0.78 },
});
