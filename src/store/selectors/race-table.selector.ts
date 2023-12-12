import { RootState } from '@store/reducers';
import { InitRaceTableState } from '@store/reducers/race-table';

const raceTableSelector = (state: RootState): InitRaceTableState => state.raceTable;

export default raceTableSelector;
