import { combineReducers } from 'redux';
import driversListReducer from './drivers-list';
import driverDetailsReducer from './driver-details';
import raceTableReducer from './race-table';

export const rootReducer = combineReducers({
  driverDetails: driverDetailsReducer!,
  driversList: driversListReducer!,
  raceTable: raceTableReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
