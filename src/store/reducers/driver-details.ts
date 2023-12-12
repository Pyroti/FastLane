import { DriverModel } from '@core/interfaces/drivers.interface';
import { DriverDetailsAction, DriverDetailsActionTypes } from '@store/types/driver-details';
import { Reducer } from 'react';

export interface InitDriverDetailsState {
  driverDetails: DriverModel | null;
  isLoading: boolean;
  error: string | null;
}

export const initialStateDriverDetail: InitDriverDetailsState = {
  driverDetails: null,
  isLoading: true,
  error: null,
};

const driverDetailsReducer: Reducer<InitDriverDetailsState, DriverDetailsAction> = (state = initialStateDriverDetail, action) => {
  switch (action.type) {
    case DriverDetailsActionTypes.GetDriverDetailsStart:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case DriverDetailsActionTypes.GetDriverDetailsSuccess:
      return {
        ...state,
        driverDetails: action.payload,
        isLoading: false,
      };
    case DriverDetailsActionTypes.GetDriverDetailsFailed:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default driverDetailsReducer;
