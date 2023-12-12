import { RacesModel } from '@core/interfaces/races.interface';
import { RaceTableAction, RaceTableActionTypes } from '@store/types/race-table';

export const raceTableStart = (): RaceTableAction => ({
  type: RaceTableActionTypes.GetRaceTableStart,
});

export const raceTableSuccess = (raceTable: RacesModel[]): RaceTableAction => ({
  type: RaceTableActionTypes.GetRaceTableSuccess,
  payload: raceTable,
});

export const raceTableFail = (error: string): RaceTableAction => ({
  type: RaceTableActionTypes.GetRaceTableFailed,
  payload: error,
});
