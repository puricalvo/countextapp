import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../Screens/home/HomeScreen';
import { ProfileScreen } from '../Screens/profile/ProfileScreen';
import { SettingsScreen } from '../Screens/settings/SettingsScreen';

const Tab = createBottomTabNavigator();

export const ButtomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ HomeScreen} />
      <Tab.Screen name="Profile" component={ ProfileScreen } />
      <Tab.Screen name="Settings" component={ SettingsScreen } />
    </Tab.Navigator>
  );
}