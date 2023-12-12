import { RacesModel } from '@core/interfaces/races.interface';
import { RaceTableAction, RaceTableActionTypes } from '@store/types/race-table';
import { Reducer } from 'react';

export interface InitRaceTableState {
  raceTable: RacesModel[] | null;
  isLoading: boolean;
  error: string | null;
}

export const initialStateRaceTable: InitRaceTableState = {
  raceTable: null,
  isLoading: true,
  error: null,
};

const raceTableReducer: Reducer<InitRaceTableState, RaceTableAction> = (state = initialStateRaceTable, action) => {
  switch (action.type) {
    case RaceTableActionTypes.GetRaceTableStart:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case RaceTableActionTypes.GetRaceTableSuccess:
      return {
        ...state,
        isLoading: false,
        raceTable: action.payload,
      };
    case RaceTableActionTypes.GetRaceTableFailed:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default raceTableReducer;
