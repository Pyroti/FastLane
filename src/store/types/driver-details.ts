import { DriverModel } from '@core/interfaces/drivers.interface';

export enum DriverDetailsActionTypes {
  GetDriverDetailsStart = '[DriverDetailsTypes] GetDriverDetailsStart',
  GetDriverDetailsSuccess = '[DriverDetailsTypes] GetDriverDetailsSuccess',
  GetDriverDetailsFailed = '[DriverDetailsTypes] GetDriverDetailsFailed',
}

interface DriverDetailsStartAction {
  type: DriverDetailsActionTypes.GetDriverDetailsStart;
}

interface DriverDetailsSuccessAction {
  type: DriverDetailsActionTypes.GetDriverDetailsSuccess;
  payload: DriverModel;
}

interface DriverDetailsFailAction {
  type: DriverDetailsActionTypes.GetDriverDetailsFailed;
  payload: string;
}

export type DriverDetailsAction =
  | DriverDetailsStartAction
  | DriverDetailsSuccessAction
  | DriverDetailsFailAction;
