import { DriverModel } from '@core/interfaces/drivers.interface';
import { DriversListAction, DriversListActionTypes } from '@store/types/drivers-list';

export const driversListStart = (): DriversListAction => ({
  type: DriversListActionTypes.GetDriversListStart,
});

export const driversListSuccess = (driversList: DriverModel[]): DriversListAction => ({
  type: DriversListActionTypes.GetDriversListSuccess,
  payload: driversList,
});

export const driversListFail = (error: string): DriversListAction => ({
  type: DriversListActionTypes.GetDriversListFailed,
  payload: error,
});
