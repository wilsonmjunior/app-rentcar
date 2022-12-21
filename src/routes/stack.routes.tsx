import { createStackNavigator } from '@react-navigation/stack';

import { CarDetails } from '../screens/CarDetails';
import { Home } from '../screens/Home';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { SchedulingDetails } from '../screens/SchedulingDetails';

const { Navigator, Screen } = createStackNavigator();

export const screens = {
  HOME: 'HOME',
  SCHEDULING: 'SCHEDULING',
  SCHEDULING_COMPLETE: 'SCHEDULING_COMPLETE',
  SCHEDULING_DETAILS: 'SCHEDULING_DETAILS',
  CAR_DETAILS: 'CAR_DETAILS',
};

export function StackRoutes() {
  return (
    <Navigator headerMode='none'>
      <Screen
        name={screens.HOME}
        component={Home}
      />
      <Screen
        name={screens.SCHEDULING}
        component={Scheduling}
      />
      <Screen
        name={screens.SCHEDULING_COMPLETE}
        component={SchedulingComplete}
      />
      <Screen
        name={screens.SCHEDULING_DETAILS}
        component={SchedulingDetails}
      />
      <Screen
        name={screens.CAR_DETAILS}
        component={CarDetails}
      />
    </Navigator>
  )
}
