import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigation} from './TabNavigation';
import {TabNavigation2} from './TabNavigation2';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="First animated">
      <Drawer.Screen name="First animated" component={TabNavigation} />
      <Drawer.Screen name="Second animated" component={TabNavigation2} />
    </Drawer.Navigator>
  );
};
