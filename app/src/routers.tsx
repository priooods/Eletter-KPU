import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Index from './layout/auth/index.tsx';
import Register from './layout/auth/register.tsx';
import Login from './layout/auth/login.tsx';
import Dashboard from './layout/dashboard.tsx';
// import History from './layout/history/index.tsx';
// import Form from './layout/form/index.tsx';
import SplashScreen from './layout/splashscreen.tsx';
// import Barcode from './layout/barcode/bacode.tsx';
// import Login from './layout/auth/login.tsx';
const Stack = createNativeStackNavigator();
function Router() {
  return (
    <Stack.Navigator
      initialRouteName="Index"
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
        component={Dashboard}
      />
      {/* <Stack.Screen
        navigationKey="Form"
        name="Form"
        options={{animation: 'fade'}}
        component={Form}
      />
      <Stack.Screen
        navigationKey="Barcode"
        name="Barcode"
        options={{animation: 'fade'}}
        component={Barcode}
      /> */}
    </Stack.Navigator>
  );
}

export default Router;
