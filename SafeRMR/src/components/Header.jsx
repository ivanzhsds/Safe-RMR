import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/theme';

export default function Header({ title, eyebrow, action }) {
  return (
    <View style={styles.row}>
      <View style={styles.copy}>
        {eyebrow ? <Text style={styles.eyebrow}>{eyebrow.toUpperCase()}</Text> : null}
        <Text style={styles.title}>{title}</Text>
      </View>
      {action}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  copy: { flex: 1 },
  eyebrow: { color: colors.teal, fontSize: 11, fontWeight: '800', letterSpacing: 1, marginBottom: 4 },
  title: { color: colors.ink, fontSize: 26, fontWeight: '800' },
});
