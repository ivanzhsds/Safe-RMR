import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { colors } from '../styles/theme';
import Home from '../screens/Home';
import Alertas from '../screens/Alertas';
import SOS from '../screens/SOS';
import Perfil from '../screens/Perfil';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  const icon = (symbol) => ({ color, size }) => <Text style={{ color, fontSize: size }}>{symbol}</Text>;
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.blue, tabBarInactiveTintColor: colors.muted, tabBarLabelStyle: { fontSize: 11, fontWeight: '700' }, tabBarStyle: { borderTopColor: colors.border, height: 66, paddingBottom: 8, paddingTop: 6 } }}>
      <Tab.Screen name="Mapa" component={Home} options={{ tabBarIcon: icon('⌖') }} />
      <Tab.Screen name="Alertas" component={Alertas} options={{ tabBarIcon: icon('!') }} />
      <Tab.Screen name="SOS" component={SOS} options={{ tabBarIcon: icon('✚') }} />
      <Tab.Screen name="Perfil" component={Perfil} options={{ tabBarIcon: icon('●') }} />
    </Tab.Navigator>
  );
}
