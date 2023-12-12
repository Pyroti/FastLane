import { DriverModel } from '@core/interfaces/drivers.interface';
import { DriverDetailsAction, DriverDetailsActionTypes } from '@store/types/driver-details';

export const driverDetailsStart = (): DriverDetailsAction => ({
  type: DriverDetailsActionTypes.GetDriverDetailsStart,
});

export const driverDetailsSuccess = (driverDetails: DriverModel): DriverDetailsAction => ({
  type: DriverDetailsActionTypes.GetDriverDetailsSuccess,
  payload: driverDetails,
});

export const driverDetailsFail = (error: string): DriverDetailsAction => ({
  type: DriverDetailsActionTypes.GetDriverDetailsFailed,
  payload: error,
});
