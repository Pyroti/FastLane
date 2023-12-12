import { RacesModel } from '@core/interfaces/races.interface';

export enum RaceTableActionTypes {
  GetRaceTableStart = '[RaceTableTypes] GetRaceTableStart',
  GetRaceTableSuccess = '[RaceTableTypes] GetRaceTableSuccess',
  GetRaceTableFailed = '[RaceTableTypes] GetRaceTableFailed',
}

interface RaceTableStartAction {
  type: RaceTableActionTypes.GetRaceTableStart;
}

interface RaceTableSuccessAction {
  type: RaceTableActionTypes.GetRaceTableSuccess;
  payload: RacesModel[];
}

interface RaceTableFailAction {
  type: RaceTableActionTypes.GetRaceTableFailed;
  payload: string;
}

export type RaceTableAction =
  | RaceTableStartAction
  | RaceTableSuccessAction
  | RaceTableFailAction;
