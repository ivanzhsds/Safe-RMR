import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../styles/theme';
import Home from '../screens/Home';
import Alertas from '../screens/Alertas';
import SOS from '../screens/SOS';
import Perfil from '../screens/Perfil';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.blue, tabBarInactiveTintColor: colors.muted, tabBarLabelStyle: { fontSize: 11, fontWeight: '700' }, tabBarStyle: { borderTopColor: colors.border, height: 66, paddingBottom: 8, paddingTop: 6 } }}>
      <Tab.Screen name="Mapa" component={Home} options={{ tabBarIcon: () => '⌖' }} />
      <Tab.Screen name="Alertas" component={Alertas} options={{ tabBarIcon: () => '!' }} />
      <Tab.Screen name="SOS" component={SOS} options={{ tabBarIcon: () => '✚' }} />
      <Tab.Screen name="Perfil" component={Perfil} options={{ tabBarIcon: () => '●' }} />
    </Tab.Navigator>
  );
}
