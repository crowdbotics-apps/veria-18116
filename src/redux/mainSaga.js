import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth66753Saga from '../features/EmailAuth66753/redux/sagas';
import CalendarView66751Saga from '../features/CalendarView66751/redux/sagas';
import EmailAuth66726Saga from '../features/EmailAuth66726/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth66753Saga,
CalendarView66751Saga,
EmailAuth66726Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}