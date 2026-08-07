import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { colors } from '../styles/theme';
import Home from '../screens/Home';
import Alertas from '../screens/Alertas';
import SOS from '../screens/SOS';
import Perfil from '../screens/Perfil';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  const icon = (symbol) => ({ color, size }) => <Text style={{ color, fontSize: size + 1, fontWeight: '900' }}>{symbol}</Text>;
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.cyan, tabBarInactiveTintColor: '#CBD5E1', tabBarLabelStyle: { fontSize: 11, fontWeight: '800' }, tabBarStyle: { backgroundColor: colors.navy, borderTopColor: colors.navySoft, height: 70, paddingBottom: 8, paddingTop: 7 }, tabBarItemStyle: { borderRadius: 12, marginHorizontal: 2 } }}>
      <Tab.Screen name="Mapa" component={Home} options={{ tabBarIcon: icon('⌖') }} />
      <Tab.Screen name="Alertas" component={Alertas} options={{ tabBarIcon: icon('!') }} />
      <Tab.Screen name="SOS" component={SOS} options={{ tabBarActiveTintColor: colors.red, tabBarIcon: icon('+') }} />
      <Tab.Screen name="Perfil" component={Perfil} options={{ tabBarIcon: icon('●') }} />
    </Tab.Navigator>
  );
}
