import { getRaceList } from '@core/services/race.service';
import { raceTableStart, raceTableSuccess, raceTableFail } from '@store/actions/race-table';
import { RaceTableAction } from '@store/types/race-table';
import { Dispatch } from 'redux';

export const getRaceTableData = (id: string) => {
  return async (dispatch: Dispatch<RaceTableAction>): Promise<void> => {
    try {
      dispatch(raceTableStart());
      const driverList = await getRaceList(id);
      dispatch(raceTableSuccess(driverList));
    } catch (error) {
      const errorMessage = (error as Error).message;
      dispatch(raceTableFail(errorMessage));
    }
  };
};
