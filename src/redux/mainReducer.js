import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth66753Reducer from '../features/EmailAuth66753/redux/reducers';
import CalendarView66751Reducer from '../features/CalendarView66751/redux/reducers';
import EmailAuth66726Reducer from '../features/EmailAuth66726/redux/reducers';
import SignIn166684Reducer from '../features/SignIn166684/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth66753: EmailAuth66753Reducer,
CalendarView66751: CalendarView66751Reducer,
EmailAuth66726: EmailAuth66726Reducer,
SignIn166684: SignIn166684Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});