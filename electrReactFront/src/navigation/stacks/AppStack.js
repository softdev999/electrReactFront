import {createStackNavigator} from 'react-navigation-stack';

import TaskPage from '../../containers/TaskContainer';

const AppStack = createStackNavigator(
  {
    TaskPage,
  },
  {
    initialRouteName: 'TaskPage',
    headerMode: 'none',
    navigationOptions: {header: null},
    gestureEnabled: false,
  },
);

export default AppStack;
