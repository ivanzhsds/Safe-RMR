import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import BottomNavigation from '../components/BottomNavigation';
import CriarAlerta from '../screens/CriarAlerta';
import Clima from '../screens/Clima';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Main" component={BottomNavigation} />
      <Stack.Screen name="CriarAlerta" component={CriarAlerta} options={{ headerShown: true, title: 'Novo alerta', headerTintColor: '#102A43' }} />
      <Stack.Screen name="Clima" component={Clima} options={{ headerShown: true, title: 'Condições do tempo', headerTintColor: '#102A43' }} />
    </Stack.Navigator>
  );
}