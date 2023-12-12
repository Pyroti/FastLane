import { DriverModel } from '@core/interfaces/drivers.interface';

export enum DriversListActionTypes {
  GetDriversListStart = '[DriversListTypes] GetDriversListStart',
  GetDriversListSuccess = '[DriversListTypes] GetDriversListSuccess',
  GetDriversListFailed = '[DriversListTypes] GetDriversListFailed',
}

interface DriversListStartAction {
  type: DriversListActionTypes.GetDriversListStart;
}

interface DriversListSuccessAction {
  type: DriversListActionTypes.GetDriversListSuccess;
  payload: DriverModel[];
}

interface DriversListFailAction {
  type: DriversListActionTypes.GetDriversListFailed;
  payload: string;
}

export type DriversListAction =
  | DriversListStartAction
  | DriversListSuccessAction
  | DriversListFailAction;
