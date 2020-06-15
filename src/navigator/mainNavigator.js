import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth66753Navigator from '../features/EmailAuth66753/navigator';
import Camera66752Navigator from '../features/Camera66752/navigator';
import CalendarView66751Navigator from '../features/CalendarView66751/navigator';
import Maps66750Navigator from '../features/Maps66750/navigator';
import Tutorial66749Navigator from '../features/Tutorial66749/navigator';
import Messaging66748Navigator from '../features/Messaging66748/navigator';
import BlankScreen66746Navigator from '../features/BlankScreen66746/navigator';
import BlankScreen66745Navigator from '../features/BlankScreen66745/navigator';
import BlankScreen66744Navigator from '../features/BlankScreen66744/navigator';
import BlankScreen66743Navigator from '../features/BlankScreen66743/navigator';
import Contacts66740Navigator from '../features/Contacts66740/navigator';
import EmailAuth66726Navigator from '../features/EmailAuth66726/navigator';
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
EmailAuth66753: { screen: EmailAuth66753Navigator },
Camera66752: { screen: Camera66752Navigator },
CalendarView66751: { screen: CalendarView66751Navigator },
Maps66750: { screen: Maps66750Navigator },
Tutorial66749: { screen: Tutorial66749Navigator },
Messaging66748: { screen: Messaging66748Navigator },
BlankScreen66746: { screen: BlankScreen66746Navigator },
BlankScreen66745: { screen: BlankScreen66745Navigator },
BlankScreen66744: { screen: BlankScreen66744Navigator },
BlankScreen66743: { screen: BlankScreen66743Navigator },
Contacts66740: { screen: Contacts66740Navigator },
EmailAuth66726: { screen: EmailAuth66726Navigator },
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
