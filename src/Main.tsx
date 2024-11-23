import { NavigationContainer } from '@react-navigation/native';
import { ButtomTabNavigator } from './presentation/navigators/BottomTabNavigator';

export const Main = () => {
  return (
    <NavigationContainer>
      <ButtomTabNavigator/>
    </NavigationContainer>
  )
}
