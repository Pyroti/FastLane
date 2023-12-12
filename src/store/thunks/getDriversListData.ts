import { getDriversList } from '@core/services/drivers.service';
import { driversListFail, driversListStart, driversListSuccess } from '@store/actions/drivers-list';
import { DriversListAction } from '@store/types/drivers-list';
import { Dispatch } from 'redux';

export const getDriversListData = () => {
  return async (dispatch: Dispatch<DriversListAction>): Promise<void> => {
    try {
      dispatch(driversListStart());
      const driverList = await getDriversList();
      dispatch(driversListSuccess(driverList));
    } catch (error) {
      const errorMessage = (error as Error).message;
      dispatch(driversListFail(errorMessage));
    }
  };
};
