import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps66707Navigator from '../features/Maps66707/navigator';
import Messaging66703Navigator from '../features/Messaging66703/navigator';
import NotificationList66697Navigator from '../features/NotificationList66697/navigator';
import Settings66686Navigator from '../features/Settings66686/navigator';
import SignIn166684Navigator from '../features/SignIn166684/navigator';
import UserProfile66675Navigator from '../features/UserProfile66675/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Maps66707: { screen: Maps66707Navigator },
Messaging66703: { screen: Messaging66703Navigator },
NotificationList66697: { screen: NotificationList66697Navigator },
Settings66686: { screen: Settings66686Navigator },
SignIn166684: { screen: SignIn166684Navigator },
UserProfile66675: { screen: UserProfile66675Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
