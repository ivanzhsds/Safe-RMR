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
  base: { alignItems: 'center', borderRadius: 14, justifyContent: 'center', minHeight: 54, paddingHorizontal: 18 },
  primary: { backgroundColor: colors.blue, elevation: 2, shadowColor: colors.blue, shadowOpacity: 0.22, shadowRadius: 6 },
  secondary: { backgroundColor: colors.teal },
  outline: { backgroundColor: colors.surface, borderColor: colors.blue, borderWidth: 1.5 },
  danger: { backgroundColor: colors.redDark, elevation: 2, shadowColor: colors.red, shadowOpacity: 0.22, shadowRadius: 6 },
  text: { color: colors.surface, fontSize: 16, fontWeight: '900' },
  outlineText: { color: colors.blue },
  pressed: { opacity: 0.78 },
});
