import { getDriverDetails } from '@core/services/drivers.service';
import { driverDetailsStart, driverDetailsSuccess, driverDetailsFail } from '@store/actions/driver-details';
import { DriverDetailsAction } from '@store/types/driver-details';
import { Dispatch } from 'redux';

export const getDriverDetailsData = (id: string) => {
  return async (dispatch: Dispatch<DriverDetailsAction>): Promise<void> => {
    try {
      dispatch(driverDetailsStart());
      const driverList = await getDriverDetails(id);
      dispatch(driverDetailsSuccess(driverList));
    } catch (error) {
      const errorMessage = (error as Error).message;
      dispatch(driverDetailsFail(errorMessage));
    }
  };
};
