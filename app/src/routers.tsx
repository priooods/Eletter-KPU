import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Index from './layout/auth/index.tsx';
import Register from './layout/auth/register.tsx';
import Login from './layout/auth/login.tsx';
import SplashScreen from './layout/splashscreen.tsx';
import Dashboard from './layout/dashboard.tsx';
const Stack = createNativeStackNavigator();
function Router() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        navigationKey="SplashScreen"
        name="SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen
        navigationKey="Index"
        options={{animation: 'fade'}}
        name="Index"
        component={Index}
      />
      <Stack.Screen
        navigationKey="Register"
        options={{animation: 'fade'}}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        navigationKey="Login"
        options={{animation: 'fade'}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        navigationKey="Dashboard"
        name="Dashboard"
        options={{animation: 'fade'}}
        component={Dashboard}
      />
    </Stack.Navigator>
  );
}

export default Router;
