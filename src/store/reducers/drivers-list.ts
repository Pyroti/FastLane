import { DriverModel } from '@core/interfaces/drivers.interface';
import { DriversListAction, DriversListActionTypes } from '@store/types/drivers-list';
import { Reducer } from 'react';

export interface InitDriversListState {
  driversList: DriverModel[] | null;
  isLoading: boolean;
  error: string | null;
}

export const initialStateDriversList: InitDriversListState = {
  driversList: null,
  isLoading: true,
  error: null,
};

const driversListReducer: Reducer<InitDriversListState, DriversListAction> = (state = initialStateDriversList, action) => {
  switch (action.type) {
    case DriversListActionTypes.GetDriversListStart:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case DriversListActionTypes.GetDriversListSuccess:
      return {
        ...state,
        isLoading: false,
        driversList: action.payload,
      };
    case DriversListActionTypes.GetDriversListFailed:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default driversListReducer;
