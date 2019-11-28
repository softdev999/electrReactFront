import {NavigationActions, StackActions, DrawerActions} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function toggleDrawer() {
  _navigator.dispatch(DrawerActions.toggleDrawer());
}

function resetRoute(routeName, params) {
  const resetAction = StackActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({routeName, params})],
  });

  _navigator.dispatch(resetAction);
}

function goBack(key) {
  _navigator.dispatch(NavigationActions.back(key));
}

function moveToScreenInStack(stackName, routeName) {
  // NavigationActions.navigate(stackName, {}, { routeName });
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName: stackName,
      action: NavigationActions.navigate({routeName: routeName}),
    }),
  );
}

// add other navigation functions that you need and export them

export default {
  navigate,
  toggleDrawer,
  resetRoute,
  goBack,
  setTopLevelNavigator,
  moveToScreenInStack,
};
